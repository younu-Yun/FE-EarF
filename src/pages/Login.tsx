import styles from './Login.module.scss';
import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login } from 'store/loginSlice';
import { saveAccessToken, saveRefreshToken } from 'api/token';

import { userLogin } from 'api/fetcher';

import FormHead from 'components/User/FormHead';
import FormButton from 'components/User/FormButton';
import { DefaultInput } from 'components/User/DefaultInput';
import { validateField } from 'components/User/validation';
import LoginIllust from '../assets/images/LoginIllust.webp';

interface FormData {
  id: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<FormData>({
    id: 'earf001',
    password: '1234!@#$',
  });

  const [validation, setValidation] = useState<{ [key: string]: boolean }>({
    id: false,
    password: false,
  });

  const [formValid, setFormValid] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  useEffect(() => {
    const newValidation = {
      id: validateField('id', formData.id, formData),
      password: validateField('password', formData.password, formData),
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
      const { id, password } = formData;

      const data: any = await userLogin(id, password);
      alert(data.message);

      const { accessToken, refreshToken } = data;
      saveAccessToken(accessToken);
      saveRefreshToken(refreshToken);

      dispatch(login());
      navigate('/calender');
    } catch (error) {
      console.error('로그인 요청 중 오류 발생:', error);
      alert('아이디나 비밀번호를 다시 입력해주세요.');
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
            <img src={LoginIllust} alt='로그인 일러스트' />
          </div>
        </div>
        <div className={styles.infoBox}>
          <div></div>
          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend>로그인</legend>
                <FormHead heading={'로그인'} description={'테스트계정으로 바로 로그인!'} />
                <div>
                  <DefaultInput
                    label='아이디'
                    type='text'
                    id='id'
                    value={formData.id}
                    error={!validation.id && formData.id.length > 0}
                    errorMessage='아이디는 영어와 숫자의 조합으로 8자 이상이어야 합니다.'
                    onChange={handleInputChange}
                  />
                  <DefaultInput
                    label='비밀번호'
                    type='password'
                    id='password'
                    value={formData.password}
                    error={!validation.password && formData.password.length > 0}
                    errorMessage='비밀번호는 8자 이상이어야 합니다.'
                    onChange={handleInputChange}
                  />
                </div>
                <FormButton>
                  <button type='submit' disabled={!formValid}>
                    로그인
                  </button>
                </FormButton>
                <div className={styles.linkBox}>
                  <Link to='/find_id'>아이디 찾기</Link>
                  <Link to='/find_password'>비밀번호 찾기</Link>
                </div>
                <div className={styles.border}>
                  <span>회원이 아니신가요?</span>
                </div>
                <FormButton>
                  <Link to='/join'>회원가입</Link>
                </FormButton>
              </fieldset>
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

export default Login;
