import { useState, useEffect, useRef } from 'react';
import { useToggleLikePostMutation, useToggleLikeCommentMutation } from 'api/communityApiSlice';
import { ReactComponent as Heart } from 'assets/icons/HeartFull.svg';
import styles from './HeartReaction.module.scss';

interface HeartReactionUserProps {
  _id: string;
  name: string;
}
interface HeartReactionProps {
  postId?: string;
  commentId?: string;
  likeIds: HeartReactionUserProps[];
}

function HeartReaction({ postId, commentId, likeIds }: HeartReactionProps) {
  const [toggleLikePost] = useToggleLikePostMutation();
  const [toggleLikeComment] = useToggleLikeCommentMutation();
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const token = localStorage.getItem('token');
  const likes = likeIds.length;
  const [likeItNumber, setLikeItNumber] = useState(likes);

  const handleLikeIt = async (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (!token) {
      return; // 클릭 동작을 막음
    }
    // 타임아웃이 설정되어 있다면 이전 타임아웃을 취소합니다.
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // API 요청을 보내는 함수를 정의합니다.
    const makeApiRequest = async () => {
      try {
        if (postId && commentId) {
          await toggleLikeComment({ postId, commentId });
        } else if (postId) {
          await toggleLikePost({ postId });
        }
      } catch (error) {
        console.error('좋아요 요청 실패: ', error);
      }
    };
    const debounceDelay = 500;
    timeoutRef.current = setTimeout(makeApiRequest, debounceDelay);

    // 좋아요 상태를 업데이트합니다.
    setLikeItNumber((prevNumber) => (likeItNumber ? prevNumber - 1 : prevNumber + 1));
  };

  return (
    <button className={styles.reactionContainer} onClick={handleLikeIt}>
      <Heart />
      <span className={styles.reactionNumber}>{likeItNumber}</span>
    </button>
  );
}

export default HeartReaction;
