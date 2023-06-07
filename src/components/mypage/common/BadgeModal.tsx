import styles from './BadgeModal.module.scss';
import { ReactComponent as Exit } from 'assets/icons/Exit.svg';

interface BadgeModalProps {
  imgSrc: string;
}

function BadgeModal({ imgSrc }: BadgeModalProps) {
  return (
    <div className={styles.modalBox}>
      <Exit className={styles.exitButton}>x</Exit>
      <img src={imgSrc} alt='이미지' />
    </div>
  );
}

export default BadgeModal;
