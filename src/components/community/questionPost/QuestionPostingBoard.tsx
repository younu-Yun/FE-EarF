import { useGetCommunityPostQuery } from 'api/communityApiSlice';
import { Link, useLocation } from 'react-router-dom';
import UserComments from '../comment/UserComments';
import styles from './QuestionPostingBoard.module.scss';
import { ReactComponent as Top } from 'assets/icons/ArrowUp.svg';
import { useState, useEffect } from 'react';
import UserPostContent from './UserPostContent';

function QuestionPostingBoard() {
  const url = useLocation();
  console.log(url);
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
        <div className={styles.category}>
          <span>커뮤니티</span>
          <span>질문해요</span>
        </div>
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
