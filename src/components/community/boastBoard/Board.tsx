import { useState } from 'react';
import SelectBox from './SelectBox';
import styles from './Board.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/lazy';
import { Lazy, Autoplay } from 'swiper';

import {
  useGetAllBoastPostsQuery,
  useGetSortedTumPostsQuery,
  useGetSortedTransPostsQuery,
  useGetSortedBasketPostsQuery,
} from 'api/communityApiSlice';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { PuffLoader } from 'react-spinners';
import errorCommunity from 'assets/icons/errorCommunity.svg';
import BoastItems from './BoastItems';
import './BoastSlider.scss';

function Board() {
  const selectedOption = useSelector((state: RootState) => state.selectedOption);

  const [activeSorting, setActiveSorting] = useState('');

  const { data: allPostData, isLoading: isPostLoading, error: postError } = useGetAllBoastPostsQuery();

  const handleSortingClick = () => {
    setActiveSorting(selectedOption.value);
    console.log(selectedOption.value);
  };
  const { data: tumData, isLoading: isTumLoading, error: tumError } = useGetSortedTumPostsQuery();
  const { data: transData, isLoading: isTransLoading, error: transError } = useGetSortedTransPostsQuery();
  const { data: basData, isLoading: isBasLoading, error: basError } = useGetSortedBasketPostsQuery();

  let boastData = basData || transData || tumData || allPostData;
  let isLoading = isBasLoading || isTransLoading || isTumLoading || isPostLoading;
  let error = postError || tumError || transError || basError;

  if (selectedOption.value === 'all') {
    boastData = allPostData;
    isLoading = isPostLoading;
    error = postError;
  } else if (selectedOption.value === '텀블러') {
    boastData = tumData;
    isLoading = isTumLoading;
    error = tumError;
  } else if (selectedOption.value === '대중교통') {
    boastData = transData;
    isLoading = isTransLoading;
    error = transError;
  } else if (selectedOption.value === '장바구니') {
    boastData = basData;
    isLoading = isBasLoading;
    error = basError;
  }

  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <SelectBox onSelectClick={handleSortingClick} />
      </div>
      <div className={styles.BoastItemsContainer}>
        {isLoading ? (
          <div className={styles.loadingContainer}>
            <PuffLoader color='#24AE63' loading size={100} />
          </div>
        ) : error || (boastData && boastData.length === 0) ? (
          <div className={styles.errorContainer}>
            <img src={errorCommunity} alt='기록없음' />
            {selectedOption.value} 태그로만 작성된 기록이 없습니다.
          </div>
        ) : (
          <Swiper
            lazy={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Lazy, Autoplay]}
            className='boastSliderContainer'
          >
            {boastData &&
              boastData.map((post) => (
                <SwiperSlide key={post._id}>
                  <BoastItems
                    _id={post._id}
                    imageUrl={post.imageUrl}
                    title={post.title}
                    content={post.content}
                    date={post.date}
                    id={post.id}
                    name={post.name}
                    profileImage={post.profileImage}
                    likeIds={post.likeIds}
                    tag={post.tag}
                    checkedBadge={post.checkedBadge}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default Board;
