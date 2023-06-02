import { useRef } from 'react';
import CommentItem from './CommentItem';
import styles from './UserComments.module.scss';
import Button from '../common/Button';

function UserComments() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const autoResizeHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.allCommentsButton}>전체댓글보기</div>
      <ul>
        <CommentItem />
        <CommentItem />
      </ul>
      <div className={styles.userCommentContainer}>
        <div className={styles.userProfileContainer}>
          <div className={styles.userProfile}></div>
          <div className={styles.userBadge}></div>
        </div>
        <textarea
          rows={1}
          placeholder='댓글을 입력해주세요.'
          className={styles.content}
          onChange={autoResizeHeight}
          ref={textareaRef}
        />
        <Button text='등록' />
      </div>
    </div>
  );
}

export default UserComments;
