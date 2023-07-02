import React from 'react';
import badgeImages from './BadgeImages';
import styles from './Section.module.scss';

const SectionBadge = () => {
  return (
    <section className={styles.badge}>
      <div className={styles.inner}>
        <div className={styles.title}>
          <div>
            <span>chapter 03</span>
            <h3>뱃지수집</h3>
          </div>
          <p>미션을 수행하고 다양한 뱃지를 모아보세요!</p>
        </div>
        <div className={styles.contents}>
          <ul>
            {badgeImages.map((badge, index) => (
              <li key={`first-${index}`}>
                <img src={badge} alt={`뱃지${index + 1}`} />
              </li>
            ))}
            {badgeImages.map((badge, index) => (
              <li key={`second-${index}`}>
                <img src={badge} alt={`뱃지${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionBadge;
