import { useState } from 'react';
import SelectBox from './SelectBox';
import styles from './Board.module.scss';
import Slider from 'react-slick';
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
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import BoastItems from './BoastItems';
import './BoastSlider.scss';

function Board() {
  const selectedOption = useSelector((state: RootState) => state.selectedOption);

  const [activeSorting, setActiveSorting] = useState('');
  const { data: allPostData, isLoading: isPostLoading, error: postError } = useGetAllBoastPostsQuery();

  const handleSortingClick = () => {
    setActiveSorting(selectedOption.value);
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

  const settings = {
    className: 'boastSliderContainer',
    autoPlay: false,
    adaptiveHeigh: true,
    infinite: true,
    initialSlide: 0,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
  };
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
            <img src={errorCommunity} />
            {selectedOption.value} 태그로만 작성된 기록이 없습니다.
          </div>
        ) : (
          <Slider {...settings}>
            {boastData &&
              boastData?.map((post) => (
                <BoastItems
                  key={post._id}
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
              ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default Board;
