import { ReactComponent as Heart } from 'assets/icons/Heart.svg';
import { ReactComponent as Comment } from 'assets/icons/Comment.svg';
import styles from './QuestionUserReaction.module.scss';

function QuestionUserReaction() {
  return (
    <div className={styles.container}>
      <div className={styles.reactionContainer}>
        <Heart />
        <span className={styles.reactionNumber}>5</span>
      </div>
      <div className={styles.reactionContainer}>
        <Comment />
        <span className={styles.reactionNumber}>2</span>
      </div>
    </div>
  );
}

export default QuestionUserReaction;
