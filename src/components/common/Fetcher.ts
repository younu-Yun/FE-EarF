import * as Api from './ApiRequest';

const domain = `api주소`;

// 로그인
async function userLogin(userId: string, password: string) {
  const data = {
    id: userId,
    password: password,
  };
  return await Api.post(domain, 'login', data, false);
}
