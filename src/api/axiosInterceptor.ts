import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken, isTokenExpired, RefreshAccessToken } from './token';

// 요청 인터셉터 (클라이언트 → 서버)
axios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const accessToken = getToken();

    if (config.headers) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 (서버 → 클라이언트)
axios.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (isTokenExpired()) await RefreshAccessToken();

      const accessToken = getToken();

      if (error.config && error.config.headers) {
        error.config.headers.Authorization = `Bearer ${accessToken}`;

        const response = await axios.request(error.config);
        return response;
        console.log(response);
      }
    }
    return Promise.reject(error);
  }
);
