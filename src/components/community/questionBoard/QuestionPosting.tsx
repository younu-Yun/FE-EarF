import { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import UserProfileImage from './UserProfileImage';
import PostEditButton from './PostEditButton';
import QuestionPostingContent from './QuestionPostingContent';
import QuestionUserReaction from './QuestionUserReaction';
import QuestionContentDetail from './QuestionContentDetail';
import UserComments from './UserComments';
import styles from './QuestionPosting.module.scss';

function QuestionPosting() {
  const [viewContentDetail, setViewContentDetail] = useState(false);
  const handleViewDetail = () => {
    setViewContentDetail((prevViewContentDetail) => !prevViewContentDetail);
  };

  const content =
    '내용이 이마아아아아안큼 길어요. 이하는 Lorem Inpsum 입니다. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec sapien pretium velit pellentesque convallis eget sed ex. Nunc euismod elit in dui pharetra, ac congue ante finibus. Donec placerat tellus mi, vestibulum posuere neque facilisis ac. Nullam ultrices erat magna, non mattis nibh convallis vitae. In hac habitasse platea dictumst. Etiam tincidunt faucibus neque. Maecenas non orci neque. Fusce id felis dictum lacus porta ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales pellentesque sagittis.';

  const date = '2023-05-19T12:04:55.676Z';

  const getPostingTime = (date: string): string => {
    const dataDate = dayjs(date).locale('ko');
    const currentDate = dayjs();
    const diff = currentDate.diff(dataDate, 'minute');

    if (diff < 1) {
      return '방금 전';
    } else if (diff < 60) {
      return `${diff}분 전`;
    } else if (diff < 1440) {
      return `${Math.floor(diff / 60)}시간 전`;
    } else if (diff < 10080) {
      return `${Math.floor(diff / 1440)}일 전`;
    } else {
      return dataDate.format('YYYY.MM.DD HH:mm');
    }
  };

  return (
    <li className={styles.postingContainer}>
      <div className={styles.userProfileContainer}>
        <div className={styles.userProfileItems}>
          <UserProfileImage />
          <span className={styles.userName}>어푸어푸</span>
          <span className={styles.postingDate}>{getPostingTime(date)}</span>
        </div>
        <PostEditButton />
      </div>
      <div className={styles.contentContainer} onClick={handleViewDetail}>
        {viewContentDetail ? <QuestionContentDetail content={content} /> : <QuestionPostingContent content={content} />}
      </div>
      <QuestionUserReaction />
      {viewContentDetail ? <UserComments /> : ''}
    </li>
  );
}

export default QuestionPosting;
