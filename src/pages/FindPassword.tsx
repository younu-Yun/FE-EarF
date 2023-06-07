import styles from './FindPassword.module.scss';
import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { DefaultInput } from 'components/User/DefaultInput';
import axios from 'axios';

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
      alert(`${error.response.data.message}`);
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
      <div className={styles.title}>
        <h2>비밀번호 찾기</h2>
      </div>
      <div className={styles.form}>
        <form onSubmit={handleSendEmail}>
          <fieldset>
            <legend>비밀번호 찾기</legend>
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
            <button type='submit'>비밀번호 발송</button>
            <Link to='/login'>로그인</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FindPassword;
