import styles from './BadgeModal.module.scss';
import { ReactComponent as Exit } from 'assets/icons/Exit.svg';
import Button from 'components/common/Button';

interface BadgeModalProps {
  name: string;
  imgSrc: string;
  isGet: boolean;
  info: string;
  onClick: () => void;
}

function BadgeModal({ name, imgSrc, isGet, info, onClick }: BadgeModalProps) {
  const handleCheckedBadge = () => {
    // 대표 뱃지 설정하는 함수 추가
    // post로 대표 뱃지 전달
    console.log('버튼이 클릭되었습니다');
  };
  return (
    <div className={styles.modalBox}>
      <Exit className={styles.exitButton} onClick={onClick} />
      <div className={styles.modalContents}>
        <img src={imgSrc} alt='이미지' />
        <p className={styles.name}>{name}</p>
        <p className={styles.info}>{info}</p>
        <Button
          text='대표 뱃지 설정'
          className={isGet ? '' : 'whiteButton'}
          disabled={!isGet}
          onClick={handleCheckedBadge}
        />
      </div>
    </div>
  );
}

export default BadgeModal;
