import { ReactComponent as Heart } from 'assets/icons/Heart.svg';
import styles from '../questionBoard/QuestionUserReaction.module.scss';

function HeartReaction() {
  return (
    <div className={styles.reactionContainer}>
      <Heart />
      <span className={styles.reactionNumber}>5</span>
    </div>
  );
}

export default HeartReaction;
