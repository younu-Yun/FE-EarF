import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Chat } from 'assets/icons/Search.svg';
import { ReactComponent as Post } from 'assets/icons/Pencil.svg';
import { ReactComponent as Top } from 'assets/icons/ArrowUp.svg';
import QuestionPosting from './QuestionPosting';
import PageBox from './PageBox';
import styles from './Board.module.scss';

function Board() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSubmitSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('검색동작');
  };
  const pressEnterSearch: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      //키를 눌렀을 때 동작할 코드
      e.preventDefault();
      console.log('검색동작');
    }
  };

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handlePostingClick = () => {
    if (!token) {
      const confirmMessage = '로그인 후 작성이 가능합니다.';
      const shouldRedirect = window.confirm(confirmMessage);

      if (shouldRedirect) {
        navigate('/login');
      }
    } else {
      navigate('/community/post');
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <form onSubmit={handleSubmitSearch} className={styles.searchContainer}>
          <input
            type='text'
            className={styles.searchInput}
            placeholder='궁금한 질문을 검색해보세요!'
            onKeyPress={pressEnterSearch}
          />
          <button type='submit' className={styles.searchButton}>
            <Chat />
          </button>
        </form>
      </div>
      <div className={styles.boardTopContainer}>
        {!token ? (
          <button onClick={handlePostingClick} className={styles.postingButton}>
            <Post className={styles.postingSvg} />
            작성하기
          </button>
        ) : (
          <Link to='/community/post' className={styles.postingButton}>
            <Post className={styles.postingSvg} />
            작성하기
          </Link>
        )}
        <div className={styles.sortingContainer}>
          <ul>
            <li>최신순</li>
            <li>댓글순</li>
            <li>좋아요순</li>
          </ul>
        </div>
      </div>
      <ul>
        <QuestionPosting />
        <QuestionPosting />
        <QuestionPosting />
      </ul>
      <div>
        <PageBox />
      </div>
      <div className={styles.scrollContainer}>
        <button onClick={scrollToTop} type='button'>
          <Top />
        </button>
      </div>
    </div>
  );
}

export default Board;
