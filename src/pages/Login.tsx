import styles from './Login.module.scss';
import { useState } from 'react';
import axios from 'axios';
import loginImages from '../assets/images/login.jpg';

function Login() {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', {
        id,
        password,
      });

      if (response.status === 200) {
        // 로그인 성공 처리
      } else {
        // 로그인 실패 처리
      }
    } catch (error) {
      console.error('로그인 요청 중 오류 발생:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.image}>
          <img src={loginImages} alt='' />
        </div>
        <div className={styles.form}>
          <form>
            <fieldset>
              <legend>로그인</legend>
              <div>
                <label htmlFor='id'>아이디</label>
                <input type='text' id='id' value={id} onChange={handleUsernameChange} />
              </div>
              <div>
                <label htmlFor='password'>비밀번호</label>
                <input type='password' id='password' value={password} onChange={handlePasswordChange} />
              </div>
              <button type='submit' onClick={handleLogin}>
                로그인
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
