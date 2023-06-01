import { ReactComponent as Chat } from 'assets/icons/Search.svg';
import { ReactComponent as Post } from 'assets/icons/Pencil.svg';
import styles from './Board.module.scss';
import QuestionPosting from './QuestionPosting';

function Board() {
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
        <button className={styles.postingButton}>
          <Post className={styles.postingSvg} />
          작성하기
        </button>
        <div className={styles.filteringContainer}>
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
      <div>1234567</div>
    </div>
  );
}

export default Board;
