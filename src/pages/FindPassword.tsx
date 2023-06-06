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

    console.log('Send email to:', email);
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
