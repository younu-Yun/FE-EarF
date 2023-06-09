import * as Api from './ApiRequest';

const domain = `http://34.64.216.86/api`;

// 로그인
export async function userLogin(userId: string, password: string) {
  const data = {
    id: userId,
    password: password,
  };
  return await Api.post(domain, 'auth', data, false);
}

export async function getCommunityPosts(number?: string) {
  const params = number ? `community/questions?page=${number}?sort=latest` : `community/questions?page=1?sort=latest`;
  return await Api.get(domain, params, false);
}
