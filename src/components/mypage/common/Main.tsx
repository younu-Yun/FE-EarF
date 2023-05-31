import styles from './Main.module.scss'
import { useEffect, useState } from 'react';

function Main() {
  const [ showModal, setShowModal ] = useState(false);
  // 회원 정보 수정 버튼
  const onEdit = () => {
    setShowModal(!showModal)
  }
  return (
    <div className={styles.main}>
      {showModal && (
        <div className={styles.modalBox}>
          <p>비밀번호를 입력해주세요</p>
          <input type='password' ></input>
          <button className={styles.button} onClick={onEdit} >확인</button>
        </div>
      )}
      <div className={styles.profile}>
        <div className={styles.imgContainer}></div> 
        <div className={styles.userId}>나는유저</div>
      </div>
      <div className={styles.dataFiled}>
        <div>이름<span>김길동</span></div>
        <div>이메일<span>abc@elice.com</span></div>
        <div>전화번호<span>010-1234-5678</span></div>
        <hr />
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={onEdit}>수정하기</button>
          <button className={styles.button}>회원탈퇴</button>
        </div>
      </div>
    </div>
  )
}

export default Main;