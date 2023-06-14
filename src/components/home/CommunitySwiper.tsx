import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import styles from './CommunitySwiper.module.scss';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';

const CommunitySwiper = () => {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        // install Swiper modules
        direction={'vertical'}
        modules={[Autoplay]}
        // modules={[Navigation, Autoplay]}
        // navigation={true}
        spaceBetween={20}
        slidesPerView={2}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className={styles.community}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.board}></div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.board}></div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.board}></div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.board}></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CommunitySwiper;
