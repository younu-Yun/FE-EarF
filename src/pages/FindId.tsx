import { useState, ChangeEvent } from 'react';
// import axios from 'axios';
import styles from './FindId.module.scss';

interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
}

const user = [
  {
    id: 'test123',
    name: '신짱구',
    email: 'test@gmail.com',
    phoneNumber: '010-1234-5678',
  },
  {
    id: 'user1',
    name: '홍길동',
    email: 'user1@gmail.com',
    phoneNumber: '010-1111-2222',
  },
  {
    id: 'user2',
    name: '김철수',
    email: 'user2@gmail.com',
    phoneNumber: '010-3333-4444',
  },
  {
    id: 'user3',
    name: '이영희',
    email: 'user3@gmail.com',
    phoneNumber: '010-5555-6666',
  },
  {
    id: 'user4',
    name: '박민수',
    email: 'user4@gmail.com',
    phoneNumber: '010-7777-8888',
  },
  {
    id: 'user5',
    name: '장영실',
    email: 'user5@gmail.com',
    phoneNumber: '010-9999-0000',
  },
  {
    id: 'user6',
    name: '손흥민',
    email: 'user6@gmail.com',
    phoneNumber: '010-1212-3434',
  },
  {
    id: 'user7',
    name: '김연아',
    email: 'user7@gmail.com',
    phoneNumber: '010-4545-6767',
  },
  {
    id: 'user8',
    name: '유재석',
    email: 'user8@gmail.com',
    phoneNumber: '010-7878-9090',
  },
  {
    id: 'user9',
    name: '박지성',
    email: 'user9@gmail.com',
    phoneNumber: '010-2323-4545',
  },
  {
    id: 'user10',
    name: '전지현',
    email: 'user10@gmail.com',
    phoneNumber: '010-5757-7878',
  },
];

function FindId() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [foundId, setFoundId] = useState('');
  const [emailWarning, setEmailWarning] = useState('');
  const [nameWarning, setNameWarning] = useState('');

  const handleFindId = (e: any) => {
    e.preventDefault();

    if (email === '') {
      setEmailWarning('이메일을 입력해주세요.');
      return;
    }
    if (name === '') {
      setNameWarning('이름을 입력해주세요.');
      return;
    }

    setEmailWarning('');
    setNameWarning('');

    const foundUser = user.find((user) => user.email === email && user.name === name);

    if (foundUser) {
      setFoundId(foundUser.id);
      // 여기에서 모달 또는 알림을 표시하는 로직을 작성하세요.
      console.log(`찾은 아이디: ${foundUser.id}`);
    } else {
      // 사용자를 찾지 못한 경우에 대한 처리 로직을 작성하세요.
      console.log('일치하는 사용자를 찾을 수 없습니다.');
    }
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
        <form action=''>
          <div className={styles.formElement}>
            <label htmlFor='email'>이메일</label>
            <input
              type='text'
              placeholder='이메일 주소'
              id='email'
              name='email'
              value={email}
              onChange={handleEmailChange}
            />
            <div className={styles.warning}>{emailWarning}</div>
          </div>
          <div className={styles.formElement}>
            <label htmlFor='name'>이름</label>
            <input type='text' placeholder='이름' id='name' name='name' value={name} onChange={handleNameChange} />
            <div className={styles.warning}>{nameWarning}</div>
          </div>
          <div className={styles.buttonBox}>
            <button onClick={handleFindId}>아이디 찾기</button>
          </div>
        </form>
      </div>
      <div>찾은 아이디: {foundId}</div>
    </div>
  );
}

export default FindId;
