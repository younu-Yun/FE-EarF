import { ReactComponent as Comment } from 'assets/icons/Comment.svg';
import styles from './QuestionUserReaction.module.scss';
import HeartReaction from '../common/HeartReaction';

function QuestionUserReaction() {
  return (
    <div className={styles.container}>
      <HeartReaction />
      <div className={styles.reactionContainer}>
        <Comment />
        <span className={styles.reactionNumber}>2</span>
      </div>
    </div>
  );
}

export default QuestionUserReaction;
