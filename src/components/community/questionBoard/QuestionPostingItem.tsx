import getPostingTime from 'utils/getPostingTime';
import UserProfileImage from '../common/sideNav/UserProfile';
import PostEditButton from './PostEditButton';
import { ReactComponent as Heart } from 'assets/icons/Heart.svg';
import { ReactComponent as Comment } from 'assets/icons/Comment.svg';
import styles from './QuestionPostingItem.module.scss';

interface postItemProps {
  content: string;
  date: string;
  title: string;
  username: string;
  likeNums: number;
  commentNums: number;
}
function QuestionPostingItem({ date, title, content, username, likeNums, commentNums }: postItemProps) {
  const contentText = `${content.split('.').slice(0, 5).join('. ')}`;

  return (
    <li className={styles.container}>
      <div className={styles.userEditContainer}>
        <span className={styles.postingDate}>{getPostingTime(date)}</span>
        {/* <PostEditButton /> */}
      </div>
      <div className={styles.contentContainer}>
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.content}>{contentText}</p>
        </div>
      </div>
      <div className={styles.userContainer}>
        <div>
          <UserProfileImage username={username} />
        </div>
        <div className={styles.userReactionContainer}>
          <div className={styles.reactionContainer}>
            <Heart />
            <span className={styles.reactionNumber}>{likeNums}</span>
          </div>
          <div className={styles.reactionContainer}>
            <Comment />
            <span className={styles.reactionNumber}>{commentNums}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default QuestionPostingItem;
