import styles from './Main.module.scss';
import { useState } from 'react';
import Button from 'components/common/Button';
import Modal from './Modal';

function Main() {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showRemoveModal, setShowRemoveModal] = useState<boolean>(false);

  // Edit 모달
  const handleShowEditModal = (): void => {
    setShowEditModal((prevState) => !prevState);
  };
  // Remove 모달
  const handleShowRemoveModal = (): void => {
    setShowRemoveModal((prevState) => !prevState);
  };

  // Edit 페이지 이동
  const handleNavigateToEdit = (): void => {
    window.location.href = '/mypage/edit';
  };

  // 회원 탈퇴
  const handleRemoveAccount = (): void => {
    // api 요청
    console.log('회원 탈퇴 버튼 클릭');
  };

  return (
    <div className={styles.main}>
      {showEditModal && <Modal handleShowModal={handleShowEditModal} handleNavigateToEdit={handleNavigateToEdit} />}
      {showRemoveModal && <Modal handleShowModal={handleShowRemoveModal} handleNavigateToEdit={handleRemoveAccount} />}
      <div className={styles.profile}>
        <div className={styles.imgContainer}></div>
        <div className={styles.userId}>나는유저</div>
      </div>
      {/* 컴포넌트로 추출해 사용하는 리펙토링 진행하기*/}
      <div className={styles.dataFiledSet}>
        <div className={styles.dataFiled}>
          <div className={styles.fixedData}>이름</div>
          <div className={styles.fetchData}>김길동</div>
        </div>
        <div className={styles.dataFiled}>
          <div className={styles.fixedData}>이메일</div>
          <div className={styles.fetchData}>abc@elice.com</div>
        </div>
        <div className={styles.dataFiled}>
          <div className={styles.fixedData}>전화번호</div>
          <div className={styles.fetchData}>010-1234-5678</div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button text={'수정하기'} onClick={handleShowEditModal} />
        <Button text={'회원탈퇴'} className={'whiteButton'} onClick={handleShowRemoveModal} />
      </div>
    </div>
  );
}

export default Main;
