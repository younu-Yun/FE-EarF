import styles from './Login.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { DefaultInput } from 'components/User/DefaultInput';
import { SaveToken, SaveRefreshToken } from 'components/common/token';
// import { userLogin } from 'components/common/Fetcher';

import LoginIllust from '../assets/images/LoginIllust.jpg';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [idWarning, setIdWarning] = useState('');
  const [passwordWarning, setPasswordWarning] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (id === '') {
      setIdWarning('아이디를 입력해주세요');
    }
    if (password === '') {
      setPasswordWarning('비밀번호를 입력해주세요');
    }

    try {
      if (id !== '' && password !== '') {
        const userData = {
          id,
          password,
        };
        const response = await axios.post('/api/auth', userData);

        console.log('로그인에 성공했습니다:', response.data);

        const { accessToken, refreshToken } = response.data;
        SaveToken(accessToken);
        SaveRefreshToken(refreshToken);

        /*
        //Fetcher 사용
        const data: any = await userLogin(id, password);
        console.log('로그인에 성공했습니다:', data);

        const { accessToken, refreshToken } = data;
        SaveToken(accessToken);
        SaveRefreshToken(refreshToken);
        */
      }
    } catch (error) {
      console.error('로그인 요청 중 오류 발생:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.image}>
          <img src={LoginIllust} alt='' />
        </div>
        <div className={styles.form}>
          <form>
            <fieldset>
              <legend>로그인</legend>
              <div className={styles.logo}>
                <span>EarF</span>
              </div>
              <div className={styles.title}>
                <h2>로그인</h2>
                <p>실천하고, 기록하고, 공유해보세요!</p>
              </div>
              <div>
                <DefaultInput
                  inputProps={{
                    type: 'text',
                    id: 'id',
                    value: id,
                    onChange: handleUsernameChange,
                  }}
                  label='아이디'
                  showWarning={idWarning !== ''}
                  warning={idWarning}
                />
                <DefaultInput
                  inputProps={{
                    type: 'password',
                    id: 'password',
                    value: password,
                    onChange: handlePasswordChange,
                  }}
                  label='비밀번호'
                  showWarning={passwordWarning !== ''}
                  warning={passwordWarning}
                />
              </div>
              <div className={styles.buttonBox}>
                <button type='submit' onClick={handleLogin}>
                  로그인
                </button>
              </div>
              <div className={styles.linkBox}>
                <Link to='/find_id'>아이디 찾기</Link>
                <Link to='/find_password'>비밀번호 찾기</Link>
              </div>
              <div className={styles.border}>
                <span>회원이 아니신가요?</span>
              </div>
              <div className={styles.buttonBox}>
                <Link to='/join'>회원가입</Link>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
