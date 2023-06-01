import { ReactComponent as Chat } from 'assets/icons/Search.svg';
import styles from './Board.module.scss';

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
    <div>
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
      <div>
        <button className={styles.postingButton}>작성하기</button>
        <div>최신순 / 좋아요순 / 댓글순</div>
      </div>
      <div>
        <div>프로필 이미지 / 이름 / 시간 / 수정&삭제</div>
        <div>제목</div>
        <div>내용</div>
        <div>반응</div>
      </div>
    </div>
  );
}

export default Board;
