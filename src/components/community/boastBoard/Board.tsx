import SelectBox from './SelectBox';
import styles from './Board.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import { useState } from 'react';
import {
  useGetAllBoastPostsQuery,
  useGetTumBoastPostsQuery,
  useGetTransBoastPostsQuery,
  useGetBasketBoastPostsQuery,
} from 'api/communityApiSlice';
import { PuffLoader } from 'react-spinners';
import errorCommunity from 'assets/images/errorCommunity.png';
// import 'swiper/swiper.min.scss';
// import 'swiper/components/pagination/pagination.min.scss';
// import 'swiper/components/navigation/navigation.min.scss';

import BoastItem from './BoastItem';
import BoastItemCopy from './BoastItemCopy';
function Board() {
  const [activeSorting, setActiveSorting] = useState('all');
  const [activeIndex, setActiveIndex] = useState(0);

  const { data: allPostData, isLoading: isPostLoading, error: postError } = useGetAllBoastPostsQuery();

  const handleSortingClick = (sorting: string) => {
    setActiveSorting(sorting);
  };
  const sortedData = allPostData;
  const isLoading = isPostLoading;
  const error = postError;

  // if (activeSorting === '텀블러') {
  //   sortedData = mostCommentsData;
  //   isLoading = isMostCommentsLoading;
  //   error = mostCommentsError;
  // } else if (activeSorting === '대중교통') {
  //   sortedData = mostLikesData;
  //   isLoading = isMostLikesLoading;
  //   error = mostLikesError;
  // }

  const handleSlideChange = (swiper: any) => {
    const index = swiper.activeIndex;
    setActiveIndex(index);
  };

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
  };
  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <SelectBox />
      </div>
      <div className={styles.BoastItemsContainer}>
        <Slider {...settings}>
          {isLoading ? (
            <div className={styles.loadingContainer}>
              <PuffLoader color='#24AE63' loading size={100} />
            </div>
          ) : error ? (
            <div className={styles.errorContainer}>
              <img src={errorCommunity} />
              게시글을 불러오지 못했습니다.
            </div>
          ) : (
            <>
              {sortedData &&
                sortedData?.map((post) => (
                  <BoastItemCopy
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
            </>
          )}
        </Slider>
      </div>
    </div>
  );
}

export default Board;
