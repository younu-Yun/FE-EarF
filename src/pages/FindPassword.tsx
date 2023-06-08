import styles from './FindPassword.module.scss';
import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { DefaultInput } from 'components/User/DefaultInput';
import axios from 'axios';
import JoginIllust from '../assets/images/JoinIllust.jpg';

function FindPassword() {
  const [email, setEmail] = useState('');
  const [emailWarning, setEmailWarning] = useState('');

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email) || email === '') {
      setEmailWarning('유효한 이메일을 입력해주세요.');
      return;
    }

    setEmailWarning('');

    try {
      await axios.post('/api/user/reset-password', {
        email: email,
      });
      alert('초기화 된 비밀번호를 발송했습니다.');
    } catch (error) {
      alert('이메일 발송 중 오류가 발생했습니다.');
      console.log(`이메일 발송 중 오류가 발생했습니다. ${error}`);
    }

    console.log('Send email to:', email);
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailWarning('');
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.image}>
          <img src={JoginIllust} alt='아이디찾기 일러스트' />
        </div>
        <div className={styles.form}>
          <form onSubmit={handleSendEmail}>
            <fieldset>
              <legend>비밀번호 찾기</legend>
              <div className={styles.logo}>
                <span>EarF</span>
              </div>
              <div className={styles.title}>
                <h2>비밀번호 찾기</h2>
                <p>이메일 입력시, 임시비밀번호가 발송됩니다.</p>
              </div>
              <DefaultInput
                inputProps={{
                  type: 'email',
                  id: 'email',
                  value: email,
                  onChange: handleEmailChange,
                }}
                label='이메일'
                showWarning={true}
                warning={emailWarning}
              />
            </fieldset>
            <div className={styles.buttonBox}>
              <Link to='/login'>로그인</Link>
              <button type='submit'>비밀번호 발송</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FindPassword;
