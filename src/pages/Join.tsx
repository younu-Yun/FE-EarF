import styles from './Join.module.scss';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface FormData {
  id: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone1: string;
  phone2: string;
  phone3: string;
  name: string;
}

function Join() {
  const navigate = useNavigate();
  const firstEmptyInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<FormData>({
    id: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone1: '',
    phone2: '',
    phone3: '',
    name: '',
  });

  const [warningMessages, setWarningMessages] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === 'phone1' || name === 'phone2' || name === 'phone3') {
      validatePhone(formData.phone1, formData.phone2, formData.phone3);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    handleEmptyInput();

    if (hasErrors()) {
      return; // Stop form submission if validation fails
    }

    const { id, password, confirmPassword, email, phone1, phone2, phone3, name } = formData;
    const data = {
      id,
      password,
      confirmPassword,
      email,
      phone: `${phone1}-${phone2}-${phone3}`,
      name,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/users/signup', data);
      console.log(response.data);

      // Reset the form fields
      setFormData({
        id: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone1: '',
        phone2: '',
        phone3: '',
        name: '',
      });

      setWarningMessages({});

      alert('회원가입에 성공했습니다.');
      navigate('/login');
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  const validateId = (id: string) => {
    const idRegex = /^[A-Za-z0-9]{8,}$/;
    if (!idRegex.test(id)) {
      setWarningMessages((prevState) => ({
        ...prevState,
        id: '아이디는 영어와 숫자의 조합으로 8자 이상이어야 합니다.',
      }));
      return false;
    }
    setWarningMessages((prevState) => ({ ...prevState, id: '' }));
    return true;
  };

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      setWarningMessages((prevState) => ({ ...prevState, password: '비밀번호는 8자 이상이어야 합니다.' }));
      return false;
    }
    setWarningMessages((prevState) => ({ ...prevState, password: '' }));
    return true;
  };

  const validateConfirmPassword = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setWarningMessages((prevState) => ({
        ...prevState,
        confirmPassword: '비밀번호와 비밀번호 확인 값이 일치해야 합니다.',
      }));
      return false;
    }
    setWarningMessages((prevState) => ({ ...prevState, confirmPassword: '' }));
    return true;
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setWarningMessages((prevState) => ({ ...prevState, email: '유효한 이메일 주소를 입력해주세요.' }));
      return false;
    }
    setWarningMessages((prevState) => ({ ...prevState, email: '' }));
    return true;
  };

  const validatePhone = (phone1: string, phone2: string, phone3: string) => {
    if (!phone1 || !phone2 || !phone3) {
      setWarningMessages((prevState) => ({ ...prevState, phone1: '전화번호를 입력해주세요.' }));
      return false;
    }

    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone1) || !phoneRegex.test(phone2) || !phoneRegex.test(phone3)) {
      setWarningMessages((prevState) => ({ ...prevState, phone1: '전화번호는 숫자만 입력해주세요.' }));
      return false;
    }

    setWarningMessages((prevState) => ({ ...prevState, phone: '' }));
    return true;
  };

  const validateName = (name: string) => {
    if (!name) {
      setWarningMessages((prevState) => ({ ...prevState, name: '이름을 입력해주세요.' }));
      return false;
    }
    setWarningMessages((prevState) => ({ ...prevState, name: '' }));
    return true;
  };

  const handleEmptyInput = () => {
    const fields: Array<keyof FormData> = [
      'id',
      'password',
      'confirmPassword',
      'email',
      'phone1',
      'phone2',
      'phone3',
      'name',
    ];

    for (const field of fields) {
      if (!formData[field]) {
        setWarningMessages((prevState) => ({ ...prevState, [field]: '필수 항목입니다.' }));

        // Set focus to the first empty input field
        if (firstEmptyInputRef.current && field === fields[0]) {
          firstEmptyInputRef.current.focus();
        }

        return;
      }
    }
  };

  const hasErrors = () => {
    const { id, password, confirmPassword, email, phone1, phone2, phone3, name } = formData;

    const idValid = validateId(id);
    const passwordValid = validatePassword(password);
    const confirmPasswordValid = validateConfirmPassword(password, confirmPassword);
    const emailValid = validateEmail(email);
    const phoneValid = validatePhone(phone1, phone2, phone3);
    const nameValid = validateName(name);

    return !(idValid && passwordValid && confirmPasswordValid && emailValid && phoneValid && nameValid);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>회원가입</h2>
      </div>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>회원가입</legend>

            <div className={styles.formElement}>
              <label htmlFor='id'>아이디</label>
              <input
                type='text'
                id='id'
                name='id'
                value={formData.id}
                onChange={handleChange}
                ref={formData.id === '' ? firstEmptyInputRef : null}
              />
              <div className={styles.warning}>{warningMessages.id}</div>
            </div>

            <div className={styles.formElement}>
              <label htmlFor='password'>비밀번호</label>
              <input type='password' id='password' name='password' value={formData.password} onChange={handleChange} />
              <div className={styles.warning}>{warningMessages.password}</div>
            </div>

            <div className={styles.formElement}>
              <label htmlFor='confirmPassword'>비밀번호 확인</label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <div className={styles.warning}>{warningMessages.confirmPassword}</div>
            </div>

            <div className={styles.formElement}>
              <label htmlFor='name'>이름</label>
              <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} />
              <div className={styles.warning}>{warningMessages.name}</div>
            </div>

            <div className={styles.formElement}>
              <label htmlFor='email'>이메일</label>
              <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} />
              <div className={styles.warning}>{warningMessages.email}</div>
            </div>

            <div className={styles.formElement}>
              <label htmlFor='phone1'>전화번호</label>
              <div>
                <input type='text' id='phone1' name='phone1' value={formData.phone1} onChange={handleChange} />
                <span>-</span>
                <input type='text' id='phone2' name='phone2' value={formData.phone2} onChange={handleChange} />
                <span>-</span>
                <input type='text' id='phone3' name='phone3' value={formData.phone3} onChange={handleChange} />
              </div>
              <div className={styles.warning}>{warningMessages.phone1}</div>
            </div>
          </fieldset>

          <div className={styles.buttonBox}>
            <button type='submit'>회원가입</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Join;
