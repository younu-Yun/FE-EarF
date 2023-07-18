import styles from './MainSwiper.module.scss';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Lazy, Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/lazy';

import mainBanner01 from 'assets/images/mainBanner01.jpg';
import mainBanner02 from 'assets/images/mainBanner02.jpg';
import mainBanner03 from 'assets/images/mainBanner03.jpg';
const MainSwiper = () => {
  const mainBanners = [mainBanner01, mainBanner02, mainBanner03];
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        modules={[Lazy, Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        preloadImages={true}
        lazy={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className={styles.main}
      >
        {mainBanners.map((banner, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div>
              <img src={banner} alt={`메인배너이미지${index + 1}`} loading='lazy' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSwiper;
