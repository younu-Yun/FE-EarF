import HeartReaction from '../common/HeartReaction';
import mockImg from 'assets/images/8507842.jpg';
import styles from './BoastItem.module.scss';

function BoastItem() {
  return (
    <div className={styles.postContainer}>
      <div style={{ backgroundImage: `url(${mockImg})` }} className={styles.imgContainer}></div>
      <div className={styles.profileContainer}>
        <div className={styles.userProfile}></div>
        <div className={styles.userBadge}></div>
      </div>
      <p className={styles.userName}>어푸어푸</p>
      <div className={styles.contentsContainer}>
        <p className={styles.title}>제목1</p>
        <p className={styles.content}>본문1</p>
        <div className={styles.heartReaction}>{/* <HeartReaction /> */}</div>
      </div>
    </div>
  );
}

export default BoastItem;
