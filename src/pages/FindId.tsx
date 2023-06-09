import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import styles from './FindId.module.scss';
import { Link } from 'react-router-dom';
import { DefaultInput } from 'components/User/DefaultInput';
import JoginIllust from '../assets/images/JoinIllust.jpg';
import AlertCircle from '../assets/icons/AlertCircle.svg';
import DefaultModal from '../components/common/DefaultModal';

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
  const [idFoundWarning, setIdFoundWarning] = useState(false);
  const [showModal, setShowModal] = useState(true);

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
      const userData: User = {
        email,
        name,
      };
      const response = await axios.post('http://localhost:3000/api/user/loginid', userData);

      const foundUser = response.data;

      if (foundUser) {
        setFoundId(foundUser.id);
        setIdFoundWarning(false);
        setShowModal(true);
        console.log(`찾은 아이디: ${foundUser.id}`);
      } else {
        setIdFoundWarning(true);
        setShowModal(false);
        console.log('일치하는 사용자를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.log('API 요청 중 에러 발생:', error);
    }
  };

  const validateEmail = (email: string) => {
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
    <>
      <div className={styles.container}>
        <div>
          <div className={styles.image}>
            <img src={JoginIllust} alt='아이디찾기 일러스트' />
          </div>
          <div className={styles.form}>
            <form onSubmit={handleFindId}>
              <fieldset>
                <legend>아이디찾기</legend>
                <div className={styles.logo}>
                  <span>EarF</span>
                </div>
                <div className={styles.title}>
                  <h2>아이디 찾기</h2>
                  <p>아이디를 잊으셨나요? 이메일과 이름을 입력해주세요.</p>
                </div>
                <div>
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
                  {idFoundWarning && <div className={styles.warning}>일치하는 아이디가 없습니다.</div>}
                </div>
              </fieldset>
              <div className={styles.buttonBox}>
                <button type='submit'>아이디 찾기</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <DefaultModal
          title='아이디찾기'
          content={
            <>
              <span>
                <img src={AlertCircle} alt='안내' /> 회원님의 정보와 일치하는 아이디입니다.
              </span>
              <p>{foundId}dbsdnwjd96</p>
            </>
          }
          button={
            <>
              <Link to='/login'>로그인</Link>
              <Link to='/find_password'>비밀번호 찾기</Link>
            </>
          }
          onClose={() => setShowModal(false)}
          showModal={showModal}
        />
      )}
    </>
  );
}

export default FindId;
