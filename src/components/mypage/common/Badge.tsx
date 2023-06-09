import { useState } from 'react';
import styles from './Badge.module.scss';
import BadgeModal from './BadgeModal';
import BadgeList from './BadgeList';

// 대표 이미지는 모달창을 띄워서 대표이미지 설정 버튼을 누르면, checkedBadge로 전송
// 커뮤니티에서 프로필을 만들 때 확인해서, 이미지를 적용

function Badge() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Edit 모달
  const handleShowModal = (index?: number): void => {
    if (typeof index !== 'undefined') setSelectedImageIndex(index);
    setShowModal((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      {BadgeList.map((badge, index) => (
        <div
          key={index}
          className={badge.isGet ? styles.items : `${styles.items} ${styles.notAcquired}`}
          onClick={() => handleShowModal(index)}
        >
          <div>{badge.name}</div>
          <img src={badge.url} alt='뱃지 이미지' />
          <div>{badge.isGet.toString()}</div>
        </div>
      ))}
      {showModal && selectedImageIndex !== null && (
        <BadgeModal
          type={BadgeList[selectedImageIndex].type}
          name={BadgeList[selectedImageIndex].name}
          imgSrc={BadgeList[selectedImageIndex].url}
          isGet={BadgeList[selectedImageIndex].isGet}
          info={BadgeList[selectedImageIndex].info}
          onClick={handleShowModal}
        />
      )}
    </div>
  );
}

export default Badge;
