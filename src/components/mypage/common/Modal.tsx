import Button from 'components/common/Button';
import styles from './Modal.module.scss';
import { useEffect, useRef } from 'react';
import { ReactComponent as Close } from 'assets/icons/Close.svg';
import { checkPassword } from 'api/fetcher';
import { useState } from 'react';

interface ModalProps {
  title: string;
  handleShowModal: () => void;
  handleNextAction: () => void;
}

function Modal({ title, handleShowModal, handleNextAction }: ModalProps) {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef && !modalRef.current?.contains(e.target as Node)) {
      handleShowModal();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleCheckPassword = async () => {
    try {
      await checkPassword(password);
      handleNextAction();
    } catch (error) {
      setIsValid((prev) => !prev);
      console.error('요청 실패', error);
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalBox} ref={modalRef}>
        <Close className={styles.exitButton} onClick={handleShowModal}>
          x
        </Close>
        <h3>{title}</h3>
        <div className={styles.modalContent}>
          <p className={styles.text}>비밀번호를 입력해주세요</p>
          <div className={styles.passwordInput}>
            <label htmlFor='password'></label>
            <input type='password' id='password' value={password} placeholder='********' onChange={handleChange} />
          </div>
          {!isValid && <p className={styles.errorMessage}>비밀번호가 일치하지 않습니다</p>}
        </div>
        <div className={styles.modalButtonBox}></div>
        <Button text={'확인'} onClick={handleCheckPassword} />
      </div>
    </div>
  );
}

export default Modal;
