import getPostingTime from 'utils/getPostingTime';
import UserProfileImage from '../common/sideNav/UserProfile';
import PostEditButton from '../common/PostEditButton';
import { useGetUserInfoQuery } from 'api/communityApiSlice';
import { ReactComponent as Heart } from 'assets/icons/Heart.svg';
import { ReactComponent as Comment } from 'assets/icons/Comment.svg';
import { QuestionPost } from 'types/types';
import { Link } from 'react-router-dom';
import styles from './QuestionPostingItem.module.scss';

type QuestionPostingItemProps = Omit<QuestionPost, 'checkedBadge' | 'likeIds' | 'commentIds' | 'updatedAt' | '__v'>;

function QuestionPostingItem({
  _id,
  id,
  title,
  content,
  createdAt,
  name,
  profileImage,
  numComments,
  numLikes,
}: QuestionPostingItemProps) {
  const { data: userInfo } = useGetUserInfoQuery();

  return (
    <li className={styles.boardList}>
      <div className={styles.userEditContainer}>
        <UserProfileImage username={name} profileImage={profileImage} />
        {userInfo && userInfo.id === id ? <PostEditButton _id={_id} /> : ''}
      </div>

      <Link to={`/community/question/${_id}`}>
        <div className={styles.contentContainer}>
          <div>
            <p className={styles.title}>{title}</p>
            <p className={styles.content}>{content}</p>
          </div>
        </div>
      </Link>

      <div className={styles.userContainer}>
        <div className={styles.userReactionContainer}>
          <div className={styles.reactionContainer}>
            <Heart />
            <span className={styles.reactionNumber}>{numLikes}</span>
          </div>
          <div className={styles.reactionContainer}>
            <Comment />
            <span className={styles.reactionNumber}>{numComments}</span>
          </div>
        </div>
        <span className={styles.postingDate}>{getPostingTime(createdAt)}</span>
      </div>
    </li>
  );
}

export default QuestionPostingItem;
