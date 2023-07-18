import React from 'react';
import styles from './Section.module.scss';
import HomeCheck from 'assets/icons/HomeCheck.svg';
import homeBanner1 from 'assets/images/homeBanner1.webp';

const SectionDiary = () => {
  return (
    <section id='diary' className={styles.diary}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.title}>
            <div>
              <span>chapter 01</span>
              <h3>기록하기</h3>
            </div>
            <p>
              지구를 위한 행동은 복잡하고 거창할 필요가 없습니다.
              <br />
              어프가 설정한 실현가능한 목표 3가지를 꾸준히 기록해보세요!
            </p>
          </div>
          <div className={styles.contents}>
            <ul>
              <li>
                <div>
                  <img src={HomeCheck} alt='체크아이콘' />
                </div>
                <span>대중교통 이용하기!</span>
              </li>
              <li>
                <div>
                  <img src={HomeCheck} alt='체크아이콘' />
                </div>
                <span>장바구니 사용하기!</span>
              </li>
              <li>
                <div>
                  <img src={HomeCheck} alt='체크아이콘' />
                </div>
                <span>일회용컵 대신 텀블러로!</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.colorBackground}></div>
          <img src={homeBanner1} alt='기록하기 이미지' />
        </div>
      </div>
    </section>
  );
};

export default SectionDiary;
