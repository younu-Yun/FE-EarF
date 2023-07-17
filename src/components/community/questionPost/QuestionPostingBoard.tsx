import { useGetCommunityPostQuery } from 'api/communityApiSlice';
import { Link, useLocation } from 'react-router-dom';
import UserComments from '../comment/UserComments';
import styles from './QuestionPostingBoard.module.scss';
import { ReactComponent as Top } from 'assets/icons/ArrowUp.svg';
import { useState, useEffect } from 'react';
import UserPostContent from './UserPostContent';

function QuestionPostingBoard() {
  const url = useLocation();
  const [postId, setPostId] = useState('');

  useEffect(() => {
    const post = url.pathname.split('/')[3];
    setPostId(post);
  }, [url]);

  const { data: postInfo } = useGetCommunityPostQuery(postId);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.container}>
      <Link to='/community'>
        <span className={styles.category}>목록으로</span>
      </Link>
      {postInfo && <UserPostContent postId={postInfo._id} />}
      {postInfo && <UserComments />}

      <div className={styles.scrollContainer}>
        <button onClick={scrollToTop} type='button'>
          <Top />
        </button>
      </div>
    </div>
  );
}

export default QuestionPostingBoard;
