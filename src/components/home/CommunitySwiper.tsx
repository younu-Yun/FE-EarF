import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Lazy, Autoplay } from 'swiper';

import styles from './CommunitySwiper.module.scss';
import 'swiper/css';
import 'swiper/css/lazy';

import CommunityBanner01 from 'assets/images/comSwiper01.jpg';
import CommunityBanner02 from 'assets/images/comSwiper02.jpg';
import CommunityBanner03 from 'assets/images/comSwiper03.jpg';

const CommunitySwiper = () => {
  const CommunityBanners = [CommunityBanner01, CommunityBanner02, CommunityBanner03];

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        direction={'vertical'}
        modules={[Lazy, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        centeredSlides={false}
        loop={true}
        lazy={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className={styles.community}
      >
        {CommunityBanners.map((banner, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.board}>
              <img src={banner} alt={`커뮤니티배너이미지${index + 1}`} loading='lazy' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommunitySwiper;
