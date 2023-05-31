import axios from 'axios';
import styles from './Mypage.module.scss'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

// 마이페이지는 로그인 된 회원만 접근 가능한 페이지
// 우선 로그인 상황을 가정하고 페이지 작성
// api get요청으로 로그인 된 회원 데이터를 가져옴
function Mypage() {
  const [ showModal, setShowModal ] = useState(false);
  // 회원 정보 수정 버튼
  const onEdit = () => {
    setShowModal(!showModal)
  }

  return (
    <div>
      <div className={styles.title}>Mypage</div>
      <div className={styles.container}>
        <div className={styles.sideNavigation}>
          <ul>
            {/*
            <li>
              <NavLink to="/mypage" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
                내 정보
              </NavLink>
            </li>
            */}
            <li>
              내 정보
            </li>
            <li>
              내 게시물
            </li>
            <li>
              뱃지
            </li>
            <li>
              로그아웃
            </li>
          </ul>
        </div>
        <div className={styles.main}>
          {showModal && (
            <div className={styles.modalBox}>
              <div>비밀번호를 입력해주세요</div>
              <input type='password' ></input>
              <button className={styles.button} onClick={onEdit} >확인</button>
            </div>
          )}
          <div className={styles.profile}>프로필 img, 아이디</div>
          <div className={styles.dataFiled}>
            <div>이름</div>
            <div>이메일</div>
            <div>전화번호</div>
            <hr />
            <div className={styles.buttonContainer}>
              <button className={styles.button} onClick={onEdit}>수정하기</button>
              <button className={styles.button}>회원탈퇴</button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Mypage;
