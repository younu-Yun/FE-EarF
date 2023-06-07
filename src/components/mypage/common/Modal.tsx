import Button from 'components/common/Button';
import styles from './Modal.module.scss';
import { ReactComponent as Exit } from 'assets/icons/Exit.svg';

interface ModalProps {
  handleShowModal: () => void;
  handleNavigateToEdit: () => void;
}

function Modal({ handleShowModal, handleNavigateToEdit }: ModalProps) {
  return (
    <div className={styles.modalBox}>
      <Exit className={styles.exitButton} onClick={handleShowModal}>
        x
      </Exit>
      <p className={styles.text}>비밀번호를 입력해주세요</p>
      <input type='password' placeholder='********'></input>
      {/* 비밀번호를 확인하는 api와 연동하여 맞은 경우 edit 페이지로 이동*/}
      {/* 비밀번호가 일치하지 않는 경우 오류 메세지 출력*/}
      <p className={styles.errorMessage}>비밀번호가 일치하지 않습니다</p>
      <Button text={'확인'} onClick={handleNavigateToEdit} />
    </div>
  );
}

export default Modal;
