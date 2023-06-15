import { useState } from 'react';
import styles from './Badge.module.scss';
import BadgeModal from './BadgeModal';
import BadgeList from './BadgeList';

import Star from 'assets/icons/Star.svg';

function Badge() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const badgeList = BadgeList();

  // Edit 모달
  const handleShowModal = (index?: number): void => {
    if (typeof index !== 'undefined') setSelectedImageIndex(index);
    setShowModal((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.star}>
          <img src={Star} alt='별아이콘' />
        </div>
        <h2>뱃지관리</h2>
      </div>

      <div className={styles.contents}>
        <div>
          {badgeList.map((badge, index) => (
            <div
              key={index}
              className={badge.isGet ? styles.items : `${styles.items} ${styles.notAcquired}`}
              onClick={() => handleShowModal(index)}
            >
              <img src={badge.url} alt='뱃지 이미지' />
              <div className={styles.badgeName}>
                <p>{badge.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && selectedImageIndex !== null && (
        <BadgeModal
          type={badgeList[selectedImageIndex].type}
          name={badgeList[selectedImageIndex].name}
          imgSrc={badgeList[selectedImageIndex].url}
          isGet={badgeList[selectedImageIndex].isGet}
          info={badgeList[selectedImageIndex].info}
          handleShowModal={handleShowModal}
        />
      )}
    </div>
  );
}

export default Badge;
