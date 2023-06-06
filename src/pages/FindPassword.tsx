import styles from './FindPassword.module.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FindPassword() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    // 이메일 발송 로직을 구현합니다.
    console.log('Send email to:', email);
    // 이메일 발송 후에는 로그인 페이지로 이동하거나 사용자에게 알림을 보낼 수 있습니다.
    // 예시로 콘솔에 이메일을 출력하고 있습니다.
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
            <div className={styles.formElement}>
              <label htmlFor='email'>이메일</label>
              <input type='email' id='email' value={email} onChange={handleEmailChange} />
            </div>
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
