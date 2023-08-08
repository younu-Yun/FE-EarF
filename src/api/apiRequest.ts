import axios from 'axios';
import { isTokenExpired, refreshAccessToken } from './token';

function getToken(): string | null {
  const token = localStorage.getItem('token');
  return token !== null ? token : null;
}

interface RequestParams<T> {
  endpoint: string;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  params?: string;
  data?: any;
  requiresToken?: boolean;
}

async function request<T>({ endpoint, method, params = '', data, requiresToken = true }: RequestParams<T>): Promise<T> {
  const apiUrl = params ? `${endpoint}/${params}` : endpoint;

  const headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
  };

  if (requiresToken && !getToken()) {
    throw new Error('로그인이 필요한 요청입니다.');
  }
  if (requiresToken) {
    headers.Authorization = `Bearer ${getToken()}`;
  }

  try {
    const response = await axios.request<T>({
      url: apiUrl,
      method,
      headers,
      data,
    });

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      if (isTokenExpired()) await refreshAccessToken();

      const accessToken = getToken();

      if (error.config && error.config.headers) {
        error.config.headers.Authorization = `Bearer ${accessToken}`;

        const response = await axios.request<T>(error.config);
        return response.data;
      }
    } else if (error.response) {
      const { status } = error.response;
      throw new Error(status);
    } else {
      throw new Error('요청이 실패하였습니다.');
    }

    // 요청의 맥락상 올바른 반환 값을 보장하기 어려우므로,
    // 모든 경우를 고려했음에도 불구하고 반환에 도달하면 reject로 처리
    return Promise.reject('요청 처리 중 오류가 발생했습니다.');
  }
}

const get = <T>(endpoint: string, params = '', requiresToken = true): Promise<T> =>
  request<T>({ endpoint, method: 'GET', params, requiresToken });

const post = <T>(endpoint: string, params = '', data: any, requiresToken = true): Promise<T> =>
  request<T>({ endpoint, method: 'POST', params, data, requiresToken });

const patch = <T>(endpoint: string, params = '', data: any, requiresToken = true): Promise<T> =>
  request<T>({ endpoint, method: 'PATCH', params, data, requiresToken });

const del = <T>(endpoint: string, params = '', data: any = {}, requiresToken = true): Promise<T> =>
  request<T>({ endpoint, method: 'DELETE', params, data, requiresToken });

export { get, post, patch, del as delete };
