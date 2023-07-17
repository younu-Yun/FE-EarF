import styles from './ChangePassword.module.scss';
import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearLocalStorage } from 'api/token';

import { userChangePassword } from 'api/fetcher';

import { useDispatch } from 'react-redux';
import { logout } from 'store/loginSlice';

import FormHead from 'components/User/FormHead';
import FormButton from 'components/User/FormButton';
import { DefaultInput } from 'components/User/DefaultInput';
import { validateField } from 'components/User/validation';

import ChangePWIllust from '../assets/images/ChangePWIllust.png';

interface FormData {
  currentPassword: string;
  password: string;
  passwordConfirm: string;
}

const ChangePassword: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<FormData>({
    currentPassword: '',
    password: '',
    passwordConfirm: '',
  });

  const [validation, setValidation] = useState<{ [key: string]: boolean }>({
    currentPassword: false,
    password: false,
    passwordConfirm: false,
  });

  const [formValid, setFormValid] = useState(false);

  // 로그아웃시 access, refrest 토큰 제거
  const handleLogout = () => {
    clearLocalStorage();
    navigate('/login');
    dispatch(logout());
    alert('비밀번호 변경이 완료되었습니다. 다시 로그인해주세요.');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  useEffect(() => {
    const newValidation = {
      currentPassword: validateField('currentPassword', formData.currentPassword, formData),
      password: validateField('password', formData.password, formData),
      passwordConfirm: validateField('passwordConfirm', formData.passwordConfirm, formData),
    };

    setValidation(newValidation);
  }, [formData]);

  useEffect(() => {
    const isFormValid = Object.values(validation).every((isValid) => isValid);
    setFormValid(isFormValid);
  }, [validation]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const { currentPassword, password } = formData;
      const data: any = await userChangePassword(currentPassword, password);

      handleLogout();
    } catch (error) {
      console.error('비밀번호 변경에 실패했습니다:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div></div>
        <div></div>
      </div>
      <div>
        <div className={styles.imageBox}>
          <div className={styles.image}>
            <img src={ChangePWIllust} alt='아이디찾기 일러스트' />
          </div>
        </div>
        <div className={styles.infoBox}>
          <div></div>
          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend>비밀번호 변경</legend>
                <FormHead heading={'비밀번호 변경'} description={'비밀번호를 변경해주세요.'} />
                <div>
                  <DefaultInput
                    label='현재 비밀번호'
                    type='password'
                    id='currentPassword'
                    value={formData.currentPassword}
                    error={!validation.currentPassword && formData.currentPassword.length > 0}
                    errorMessage='비밀번호는 8자 이상이어야 합니다.'
                    onChange={handleInputChange}
                  />

                  <DefaultInput
                    label='새 비밀번호'
                    type='password'
                    id='password'
                    value={formData.password}
                    error={!validation.password && formData.password.length > 0}
                    errorMessage='비밀번호는 8자 이상이어야 합니다.'
                    onChange={handleInputChange}
                  />

                  <DefaultInput
                    label='비밀번호 확인'
                    type='password'
                    id='passwordConfirm'
                    value={formData.passwordConfirm}
                    error={!validation.passwordConfirm && formData.passwordConfirm.length > 0}
                    errorMessage='비밀번호와 비밀번호 확인이 일치하지 않습니다.'
                    onChange={handleInputChange}
                  />
                </div>
              </fieldset>
              <FormButton>
                <button type='submit' disabled={!formValid}>
                  변경하기
                </button>
              </FormButton>
            </form>
          </div>
          <div className={styles.formBottom}>
            <p>Copyright ⓒ 2023 - 2023 EarF Inc. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
