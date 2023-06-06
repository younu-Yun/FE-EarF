import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import styles from './FindId.module.scss';
import { Link } from 'react-router-dom';
import { DefaultInput } from 'components/User/DefaultInput';

interface User {
  name: string;
  email: string;
}

function FindId() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [foundId, setFoundId] = useState('');
  const [emailWarning, setEmailWarning] = useState('');
  const [nameWarning, setNameWarning] = useState('');
  const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal

  const handleFindId = async (e: FormEvent) => {
    e.preventDefault();

    if (email === '') {
      setEmailWarning('이메일을 입력해주세요.');
      return;
    }
    if (!validateEmail(email)) {
      setEmailWarning('유효한 이메일을 입력해주세요.');
      return;
    }
    if (name === '') {
      setNameWarning('이름을 입력해주세요.');
      return;
    }
    if (name.length < 2) {
      setNameWarning('이름은 2자 이상 입력해주세요.');
      return;
    }

    setEmailWarning('');
    setNameWarning('');

    try {
      const userData = {
        email,
        name,
      };
      const response = await axios.post('http://localhost:3000/api/user/loginid', userData);

      const foundUser = response.data;

      if (foundUser) {
        setFoundId(foundUser.id);
        setShowModal(true); // Display the modal when the ID is found
        console.log(`찾은 아이디: ${foundUser.id}`);
      } else {
        setShowModal(false);
        console.log('일치하는 사용자를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.log('API 요청 중 에러 발생:', error);
    }
  };

  const validateEmail = (email: string) => {
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailWarning('');
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setNameWarning('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>아이디찾기</h2>
      </div>
      <div className={styles.form}>
        <form onSubmit={handleFindId}>
          <DefaultInput
            inputProps={{
              type: 'text',
              id: 'email',
              value: email,
              onChange: handleEmailChange,
            }}
            label='이메일'
            showWarning={true}
            warning={emailWarning}
          />
          <DefaultInput
            inputProps={{
              type: 'text',
              id: 'name',
              value: name,
              onChange: handleNameChange,
            }}
            label='이름'
            showWarning={true}
            warning={nameWarning}
          />
          <div className={styles.warning}>일치하는 아이디가 없습니다.</div>
          <div className={styles.buttonBox}>
            <button type='submit'>아이디 찾기</button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button onClick={() => setShowModal(false)}>닫기</button>
            <h3>아이디찾기</h3>
            <p>찾은 아이디: {foundId}</p>

            <Link to='/login'>로그인</Link>
            <Link to='/find_password'>비밀번호 찾기</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default FindId;
