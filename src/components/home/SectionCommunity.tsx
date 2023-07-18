import React from 'react';
import CommunitySwiper from 'components/home/CommunitySwiper';
import homeBanner2 from 'assets/images/homeBanner2.webp';
import styles from './Section.module.scss';

const SectionCommunity = () => {
  return (
    <section className={styles.community}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.title}>
            <div>
              <span>chapter 02</span>
              <h3>커뮤니티</h3>
            </div>
            <p>
              내가 작성한 기록을 자랑하고
              <br />
              다른사람들의 환경고민을 들어봐요!
            </p>
          </div>
          <div className={styles.contents}>
            <CommunitySwiper></CommunitySwiper>
            <div className={styles.gradation}></div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.colorBackground}></div>
          <img src={homeBanner2} alt='커뮤니티 이미지' />
        </div>
      </div>
    </section>
  );
};

export default SectionCommunity;
