import styles from './MainSwiper.module.scss';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import mainBanner01 from 'assets/images/mainBanner01.png';
import mainBanner02 from 'assets/images/mainBanner02.png';
import mainBanner03 from 'assets/images/mainBanner03.png';

const MainSwiper = () => {
  return (
    <div className={styles.swiperContainer}>
      <Swiper // install Swiper modules
        modules={[Pagination, Autoplay]}
        pagination={true}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className={styles.main}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div>
            <img src={mainBanner01} alt='메인배너이미지01' />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div>
            <img src={mainBanner02} alt='메인배너이미지02' />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div>
            <img src={mainBanner03} alt='메인배너이미지03' />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSwiper;
