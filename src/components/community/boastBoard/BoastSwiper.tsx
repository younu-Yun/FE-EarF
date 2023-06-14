import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Mousewheel } from 'swiper';
import 'swiper/scss';
import { useState } from 'react';
// import 'swiper/swiper.min.scss';
// import 'swiper/components/pagination/pagination.min.scss';
// import 'swiper/components/navigation/navigation.min.scss';
import BoastItem from './BoastItem';
import styles from './BoastSwiper.module.scss';

function BoastSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper: any) => {
    const index = swiper.activeIndex;
    setActiveIndex(index);
  };

  return (
    <>
      {/* <Swiper
        speed={800}
        spaceBetween={30}
        autoHeight={true}
        mousewheel={true}
        centeredSlides={true}
        effect={'cards'}
        initialSlide={0}
        modules={[EffectFade, Navigation, Pagination]}
        preventClicksPropagation={true}
        className={styles.swiperContainer}
      > */}
      <Swiper
        spaceBetween={30}
        effect='fade'
        loop={false}
        // navigation={{
        //   nextEl: '.next',
        //   prevEl: '.prev',
        // }}
        // initialSlide={0}
        // modules={[EffectCoverflow, Mousewheel]}
        // preventClicksPropagation={true}
        className={styles.swiperContainer}
      >
        <SwiperSlide>
          <BoastItem />
        </SwiperSlide>
        <SwiperSlide>dddd</SwiperSlide>
        <SwiperSlide>
          <BoastItem />
        </SwiperSlide>
        <SwiperSlide>
          <BoastItem />
        </SwiperSlide>
        <SwiperSlide>
          <BoastItem />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default BoastSwiper;
