import axios from 'axios';

function getToken(): string | null {
  return localStorage.getItem('token');
}

function getRefreshToken(): string | null {
  return localStorage.getItem('refreshToken');
}

function saveToken(accessToken: string): void {
  localStorage.setItem('token', accessToken);
}

function saveRefreshToken(refreshToken: string): void {
  localStorage.setItem('refreshToken', refreshToken);
}

function removeToken(): void {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
}

//accessToken 발급 시 해당 시간 저장
function accessTokenTime() {
  const currentTime = new Date().getTime();
  localStorage.setItem('accessTokenTime', currentTime.toString());
}

function removeAccessTokenTime(): void {
  localStorage.removeItem('accessTokenTime');
}

//만료여부 판단
function isTokenExpired() {
  const accessTokenTime = localStorage.getItem('accessTokenTime');

  if (accessTokenTime) {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - parseInt(accessTokenTime);
    const oneHourInMillis = 60 * 60 * 1000; // 1시간을 밀리초로 변환
    return elapsedTime > oneHourInMillis;
  }

  return true;
}

async function RefreshAccessToken() {
  const URL = 'http://34.64.216.86';
  try {
    const refreshToken = getRefreshToken();

    const response = await axios.get(`${URL}/api/auth`, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    const { accessToken } = response.data;
    saveToken(accessToken);
  } catch (error) {
    console.error('토큰을 재발급하는데 실패했습니다:', error);
    alert('토큰을 재발급하는데 실패했습니다.');
  }
}

export {
  getToken,
  getRefreshToken,
  saveToken,
  saveRefreshToken,
  removeToken,
  accessTokenTime,
  removeAccessTokenTime,
  isTokenExpired,
  RefreshAccessToken,
};
