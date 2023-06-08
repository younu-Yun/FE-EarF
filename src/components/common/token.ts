// import jwt_decode from 'jwt-decode';
// import URL from './server_url';

function GetToken(): string | null {
  return localStorage.getItem('token');
}

function GetRefreshToken(): string | null {
  return localStorage.getItem('refreshToken');
}

function SaveToken(accessToken: string): void {
  localStorage.setItem('token', accessToken);
}

function SaveRefreshToken(refreshToken: string): void {
  localStorage.setItem('refreshToken', refreshToken);
}

function RemoveToken(): void {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
}

export { GetToken, GetRefreshToken, SaveToken, SaveRefreshToken, RemoveToken };
