import { useState } from 'react';
import UserProfileImage from './UserProfileImage';
import styles from './QuestionPosting.module.scss';
import PostEditButton from './PostEditButton';
import QuestionPostingContent from './QuestionPostingContent';
import QuestionUserReaction from './QuestionUserReaction';
import QuestionContentDetail from './QuestionContentDetail';
import UserComments from './UserComments';

function QuestionPosting() {
  const [viewContentDetail, setViewContentDetail] = useState(false);
  const handleViewDetail = () => {
    setViewContentDetail((prevViewContentDetail) => !prevViewContentDetail);
  };

  const content =
    '내용이 이마아아아아안큼 길어요. 이하는 Lorem Inpsum 입니다. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec sapien pretium velit pellentesque convallis eget sed ex. Nunc euismod elit in dui pharetra, ac congue ante finibus. Donec placerat tellus mi, vestibulum posuere neque facilisis ac. Nullam ultrices erat magna, non mattis nibh convallis vitae. In hac habitasse platea dictumst. Etiam tincidunt faucibus neque. Maecenas non orci neque. Fusce id felis dictum lacus porta ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales pellentesque sagittis.';

  const date = '2023-05-19T12:04:55.676Z';

  const getPostingTime = (date: string): string => {
    const dataDate = new Date(date);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - dataDate.getTime();

    const diffMinutes = Math.floor(timeDifference / (1000 * 60));
    const diffHours = Math.floor(timeDifference / (1000 * 60 * 60));
    const diffDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    let result = '';

    if (diffMinutes < 60) {
      result = `${diffMinutes}분 전`;
    } else if (diffHours < 24) {
      result = `${diffHours}시간 전`;
    } else if (diffDays < 7) {
      result = `${diffDays}일 전`;
    } else {
      const year = dataDate.getFullYear();
      const month = dataDate.getMonth() + 1;
      const day = dataDate.getDate();
      const hours = dataDate.getHours().toString().padStart(2, '0');
      const minutes = dataDate.getMinutes().toString().padStart(2, '0');
      result = `${year}.${month}.${day} ${hours}:${minutes}`;
    }

    return result;
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
