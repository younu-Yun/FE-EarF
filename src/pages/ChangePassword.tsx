import styles from './ChangePassword.module.scss';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FormHead from 'components/User/FormHead';
import FormButton from 'components/User/FormButton';
import { DefaultInput } from 'components/User/DefaultInput';
// import { ChangePassword } from 'components/common/Fetcher';

import JoginIllust from '../assets/images/JoinIllust.jpg';

function ChangePassword() {
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const handleCurrentPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    /**
     * 유효성검사
        현재비밀번호 : 값이 입력되지 않았을때 "비밀번호를 입력해주세요."
        새로운 비밀번호 : 8자 이하로 입력시 "비밀번호를 8자 이상 입력해주세요."
        비밀번호 확인 : 새로운 비밀번호와 값이 같아야함. 다를시 "비밀번호가 다릅니다."
     */
    if (currentPassword.length === 0 || newPassword.length === 0 || confirmPassword.length === 0) {
      setShowWarning(true);
      return;
    }

    if (newPassword.length < 8) {
      setShowWarning(true);
      console.log('비밀번호는 8자 이상이어야 합니다.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setShowWarning(true);
      console.log('새로운 비밀번호와 확인 비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      //비밀번호 변경 성공 시
      const response = await axios.post('http://34.64.216.86/api/user/change', {
        currentPassword,
        newPassword,
      });

      alert('비밀번호 변경이 완료되었습니다. 다시 로그인해주세요.');
      console.log(response.data);

      navigate('/login');

      /*
      //Fetcher 사용
      const data: any = await ChangePassword(currentPassword, newPassword);
      
      alert('비밀번호 변경이 완료되었습니다. 다시 로그인해주세요.');
      console.log(data);

      navigate('/login');
      */
    } catch (error) {
      // 비밀번호 변경 실패 시
      console.error('비밀번호 변경에 실패했습니다:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.image}>
          <img src={JoginIllust} alt='아이디찾기 일러스트' />
        </div>

        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>비밀번호 변경</legend>
              <FormHead heading={'비밀번호 변경'} description={'비밀번호를 변경해주세요.'} />
              <div>
                <DefaultInput
                  inputProps={{
                    type: 'password',
                    id: 'currentPassword',
                    value: currentPassword,
                    onChange: handleCurrentPasswordChange,
                  }}
                  label='현재 비밀번호'
                  showWarning={showWarning && currentPassword.length === 0}
                  warning='비밀번호를 입력해주세요.'
                />

                <DefaultInput
                  inputProps={{
                    type: 'password',
                    id: 'newPassword',
                    value: newPassword,
                    onChange: handleNewPasswordChange,
                  }}
                  label='새로운 비밀번호'
                  showWarning={showWarning && newPassword.length < 8}
                  warning='비밀번호를 8자 이상 입력해주세요.'
                />

                <DefaultInput
                  inputProps={{
                    type: 'password',
                    id: 'confirmPassword',
                    value: confirmPassword,
                    onChange: handleConfirmPasswordChange,
                  }}
                  label='비밀번호 확인'
                  showWarning={showWarning && (confirmPassword.length === 0 || newPassword !== confirmPassword)}
                  warning='비밀번호가 다릅니다.'
                />
              </div>
            </fieldset>
            <FormButton>
              <button type='submit'>변경하기</button>
            </FormButton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
