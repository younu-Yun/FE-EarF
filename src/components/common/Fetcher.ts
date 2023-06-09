import * as Api from './ApiRequest';

<<<<<<< HEAD
const domain = `api주소`;

// 로그인
async function userLogin(userId: string, password: string) {
=======
const domain = `http://34.64.216.86/api/`;

// 로그인
export async function userLogin(userId: string, password: string) {
>>>>>>> 38a03a9 (Feat: Fetcher 추가)
  const data = {
    id: userId,
    password: password,
  };
<<<<<<< HEAD
  return await Api.post(domain, 'login', data, false);
=======
  return await Api.post(domain, 'auth', data);
}

//회원가입
export async function userJoin(userId: string, password: string, name: string, email: string, phone: string) {
  const data = {
    id: userId,
    password: password,
    name: name,
    email: email,
    phoneNumber: phone,
  };
  return await Api.post(domain, 'user/register', data);
}

//아이디찾기
export async function FindId(email: string, name: string) {
  const data = {
    email: email,
    name: name,
  };
  return await Api.post(domain, 'user/loginid', data);
}

//비밀번호 찾기
export async function FindPassword(email: string) {
  const data = {
    email: email,
  };
  return await Api.post(domain, 'user/reset', data);
}

//비밀번호 변경
export async function ChangePassword(currentPassword: string, newPassword: string) {
  const data = {
    currentPassword: currentPassword,
    newPassword: newPassword,
  };
  return await Api.post(domain, 'user/change', data);
>>>>>>> 38a03a9 (Feat: Fetcher 추가)
}
