import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Mousewheel } from 'swiper';
import 'swiper/scss';
import { useState } from 'react';
// import 'swiper/swiper.min.scss';
// import 'swiper/components/pagination/pagination.min.scss';
// import 'swiper/components/navigation/navigation.min.scss';
import BoastItem from './BoastItem';
import styles from './BoastSwiper.module.scss';
import background from 'assets/images/background.png';
import BoastItemCopy from './BoastItemCopy';

function BoastSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper: any) => {
    const index = swiper.activeIndex;
    setActiveIndex(index);
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect='fade'
        loop={false}
        navigation={{
          nextEl: '.next',
          prevEl: '.prev',
        }}
        preventClicksPropagation={true}
        className={styles.swiperContainer}
      >
        {/* <SwiperSlide>
          <BoastItemCopy />
        </SwiperSlide>
        <SwiperSlide>
          <BoastItemCopy />
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.third}>2</div>
        </SwiperSlide>
        <SwiperSlide>
          <BoastItem />
        </SwiperSlide>
        <SwiperSlide>
          <BoastItem />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default BoastSwiper;
