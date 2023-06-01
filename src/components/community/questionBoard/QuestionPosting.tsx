import UserProfileImage from './UserProfileImage';
import styles from './QuestionPosting.module.scss';
import PostEditButton from './PostEditButton';
import QuestionPostingContents from './QuestionPostingContents';
import QuestionUserReaction from './QuestionUserReaction';

function QuestionPosting() {
  return (
    <li className={styles.postingContainer}>
      <div className={styles.userProfileContainer}>
        <div className={styles.userProfileItems}>
          <UserProfileImage />
          <span className={styles.userName}>어푸어푸</span>
          <span className={styles.postingDate}>3분전</span>
        </div>
        <PostEditButton />
      </div>
      <QuestionPostingContents />
      <QuestionUserReaction />
    </li>
  );
}

export default QuestionPosting;
