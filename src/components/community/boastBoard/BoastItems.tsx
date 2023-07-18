import { useState } from 'react';
import HeartReaction from '../common/HeartReaction';
import styles from './BoastItems.module.scss';
import { BoastPost } from 'types/types';
import getPostingTime from 'utils/getPostingTime';
import CommentUserProfile from '../comment/CommentUserProfile';
import getBadgeImagePath from 'utils/getBadgeImagePath';

function BoastItems({
  _id,
  id,
  name,
  profileImage,
  checkedBadge,
  tag,
  imageUrl,
  title,
  content,
  likeIds,
  date,
}: Omit<BoastPost, 'shareStatus' | 'createdAt' | 'updatedAt' | '__v'>) {
  const [isActive, setIsActive] = useState(false);

  const handleImgClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <div className={styles.postContainer}>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className={styles.backgroundImg}></div>
      <div className={styles.contentContainer}>
        <img
          src={imageUrl}
          className={`${styles.imgContainer} ${isActive ? styles.active : ''}`}
          onClick={handleImgClick}
        />
        <div className={styles.content}>
          <div className={styles.userProfileContainer}>
            <div className={styles.badgeContainer}>
              {tag &&
                tag.map((tagItem, index) => (
                  <img key={index} src={getBadgeImagePath(tagItem)} alt={tagItem} className={styles.tagImage} />
                ))}
            </div>
            <div className={styles.userProfile}>
              <CommentUserProfile profileImage={profileImage} checkedBadge={checkedBadge} />
              <p className={styles.user}>
                <span className={styles.useName}>{name}</span> 님의
                <span className={styles.time}> {getPostingTime(date)}</span> 기록
              </p>
            </div>
          </div>
          <p className={styles.userContent}>
            <h2>{title}</h2>
            <span> {content}</span>
          </p>
          <HeartReaction postId={_id} likeIds={likeIds} isBoast={true} />
        </div>
      </div>
    </div>
  );
}

export default BoastItems;
