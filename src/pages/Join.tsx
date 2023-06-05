import styles from './Join.module.scss';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DefaultInput } from 'components/User/DefaultInput';

interface FormData {
  id: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone: string;
  name: string;
}

const Join: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    id: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: '',
    name: '',
  });

  const [warningMessages, setWarningMessages] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = (): { isValid: boolean; warnings: Record<string, string> } => {
    let isValid = true;
    const warnings: Record<string, string> = {};

    // 아이디 유효성 검사
    if (formData.id.length < 8 || !/^[a-zA-Z0-9]+$/.test(formData.id)) {
      warnings.id = '아이디는 영어와 숫자의 조합으로 8자 이상이어야 합니다.';
      isValid = false;
    }

    // 비밀번호 유효성 검사
    if (formData.password.length < 8) {
      warnings.password = '비밀번호는 8자 이상이어야 합니다.';
      isValid = false;
    }

    // 비밀번호 확인 유효성 검사
    if (formData.password !== formData.confirmPassword) {
      warnings.confirmPassword = '비밀번호와 비밀번호 확인 값이 일치해야 합니다.';
      isValid = false;
    }

    // 이메일 유효성 검사
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      warnings.email = '유효한 이메일 주소를 입력해주세요.';
      isValid = false;
    }

    // 전화번호 유효성 검사
    const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
    if (!phoneRegex.test(formData.phone)) {
      warnings.phone = '유효한 전화번호를 입력해주세요. (예시: 010-1234-5678)';
      isValid = false;
    }

    // 이름 유효성 검사
    if (formData.name.length < 2) {
      warnings.name = '이름은 2자 이상 입력해주세요.';
      isValid = false;
    }

    return { isValid, warnings };
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { isValid, warnings } = validateForm();

    if (isValid) {
      try {
        const userData = {
          id: formData.id,
          password: formData.password,
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phone,
        };

        const response = await axios.post('http://localhost:3000/api/users/signup', userData);

        console.log(userData);

        console.error('회원 가입을 완료했습니다.', response.data);
        alert('회원가입이 완료되었습니다. 로그인페이지로 이동합니다.');

        navigate('/login');
      } catch (error) {
        console.error('회원 가입 중 오류가 발생했습니다.', error);
      }
    } else {
      setWarningMessages(warnings);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>회원가입</h2>
      </div>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>로그인</legend>

            <DefaultInput
              inputProps={{
                type: 'text',
                id: 'id',
                value: formData.id,
                onChange: handleChange,
              }}
              label='아이디'
              showWarning={!!warningMessages.id}
              warning={warningMessages.id}
            />

            <DefaultInput
              inputProps={{
                type: 'password',
                id: 'password',
                value: formData.password,
                onChange: handleChange,
              }}
              label='비밀번호'
              showWarning={!!warningMessages.password}
              warning={warningMessages.password}
            />

            <DefaultInput
              inputProps={{
                type: 'password',
                id: 'confirmPassword',
                value: formData.confirmPassword,
                onChange: handleChange,
              }}
              label='비밀번호 확인'
              showWarning={!!warningMessages.confirmPassword}
              warning={warningMessages.confirmPassword}
            />

            <DefaultInput
              inputProps={{
                type: 'email',
                id: 'email',
                value: formData.email,
                onChange: handleChange,
              }}
              label='이메일'
              showWarning={!!warningMessages.email}
              warning={warningMessages.email}
            />

            <DefaultInput
              inputProps={{
                type: 'text',
                id: 'phone',
                value: formData.phone,
                onChange: handleChange,
              }}
              label='전화번호'
              showWarning={!!warningMessages.phone}
              warning={warningMessages.phone}
            />

            <DefaultInput
              inputProps={{
                type: 'text',
                id: 'name',
                value: formData.name,
                onChange: handleChange,
              }}
              label='이름'
              showWarning={!!warningMessages.name}
              warning={warningMessages.name}
            />
          </fieldset>

          <div className={styles.buttonBox}>
            <button type='submit'>가입하기</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Join;
