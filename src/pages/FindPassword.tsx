import styles from './FindPassword.module.scss';
import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import FormHead from 'components/User/FormHead';
import FormButton from 'components/User/FormButton';
import { DefaultInput } from 'components/User/DefaultInput';
import axios from 'axios';
// import { FindPassword } from 'components/common/Fetcher';
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
      const response = await axios.post('http://34.64.216.86/api/user/reset', {
        email: email,
      });

      alert(response.data);

      /*
      //Fetcher 사용
      const data: any = await FindPassword(email);
      alert(data);
      */
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
              <FormHead heading={'비밀번호 찾기'} description={'이메일 입력시, 임시비밀번호가 발송됩니다.'} />
              <div>
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
              </div>
            </fieldset>
            <FormButton>
              <Link to='/login'>로그인</Link>
              <button type='submit'>비밀번호 발송</button>
            </FormButton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FindPassword;
