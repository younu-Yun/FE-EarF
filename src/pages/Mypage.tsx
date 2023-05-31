import axios from 'axios';
import styles from './Mypage.module.scss'
import { useEffect, useState } from 'react';

function Mypage() {
  return (
    <div>
      <div className={styles.title}>Mypage</div>
      <div className={styles.container}>
        <div className={styles.sideNavigation}>
          <ul>
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
        <div className={styles.main}>main</div>
      </div>
    </div>
  )
}

export default Mypage;
