import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';

import styles from './Section.module.scss';
import MainSwiper from 'components/home/MainSwiper';
import mascot from 'assets/images/mascot.png';
import Star from 'assets/icons/Star.svg';

const SectionMain = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);

  const smoothScrollToAnchor = (target: any) => {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const onAnchor = () => {
    smoothScrollToAnchor('#diary');
  };

  return (
    <section className={styles.homeMain}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div>
            <p>
              지구를 위한 <br /> 우리들의
            </p>
            <strong>지속가능한 행동</strong>
            <div className={styles.logo}>
              <div>
                <img src={Star} alt='별아이콘' />
              </div>
              <div>
                <img src={Star} alt='별아이콘' />
              </div>
              <h1>EarF</h1>
            </div>
          </div>
          <div className={styles.buttonBox}>
            <button onClick={onAnchor}>구경하기</button>
            {isLoggedIn ? <Link to='/calender'>시작하기</Link> : <Link to='/login'>시작하기</Link>}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.greenBackground}></div>
          <div className={styles.whiteBackground}></div>
          <div className={styles.card}>
            <MainSwiper></MainSwiper>
          </div>
          <div className={styles.mascot}>
            <img src={mascot} alt='마스코트' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMain;
