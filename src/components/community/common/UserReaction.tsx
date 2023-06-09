import { ReactComponent as Comment } from 'assets/icons/Comment.svg';
import { ReactComponent as Heart } from 'assets/icons/Heart.svg';
import styles from './UserReaction.module.scss';

function UserReaction() {
  return (
    <div className={styles.container}>
      <div className={styles.reactionContainer}>
        <Heart />
        <span className={styles.reactionNumber}>2</span>
      </div>
      <div className={styles.reactionContainer}>
        <Comment />
        <span className={styles.reactionNumber}>2</span>
      </div>
    </div>
  );
}

export default UserReaction;
