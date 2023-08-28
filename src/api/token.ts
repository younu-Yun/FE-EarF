import axios from 'axios';

// 액세스 토큰과 발급 시간을 로컬 스토리지에 저장
const saveAccessToken = (accessToken: string) => {
  localStorage.setItem('token', accessToken);
  const currentTime = new Date().toISOString();
  localStorage.setItem('validatedTime', currentTime);
};
// 리프레쉬 토큰을 로컬 스토리지에 저장
const saveRefreshToken = (value: string) => {
  localStorage.setItem('refreshToken', value);
};
// 로컬 스토리지의 모든 값을 삭제
const clearLocalStorage = (): void => {
  localStorage.clear();
};

// 'token' 값을 반환
const getToken = (): string | null => {
  return localStorage.getItem('token');
};
// 'validatedTime' 값을 반환
const getValidatedTime = (): string | null => {
  return localStorage.getItem('validatedTime');
};
// 'refreshToken' 값을 반환
const getRefreshToken = (): string | null => {
  return localStorage.getItem('refreshToken');
};

// 만료 여부 판단 (한 시간이 지나면 true, 지나지 않았다면 false)
const isTokenExpired = (): boolean => {
  const validatedTime = localStorage.getItem('validatedTime');

  if (validatedTime) {
    const currentTime = new Date().getTime();
    const oneHour = 60 * 60 * 1000;
    const isValidatedTime = new Date(validatedTime).getTime();
    return currentTime - isValidatedTime > oneHour;
  }
  return true;
};

// 만료된 액세스 토큰 재발급
const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');

  if (!refreshToken) {
    return;
  }

  if (isTokenExpired()) {
    try {
      const response = await axios.get('https://www.eco-earf.com/api/auth', {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });
      const accessToken = response.data.accessToken;
      saveAccessToken(accessToken);
    } catch (err) {
      console.error('토큰 재발급 오류:', err);
    }
  }
};

export {
  saveAccessToken,
  saveRefreshToken,
  clearLocalStorage,
  getToken,
  getValidatedTime,
  getRefreshToken,
  isTokenExpired,
  refreshAccessToken,
};
