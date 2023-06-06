import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import PostingContent from './PostingContent';
import styles from './QuestionPostingBoard.module.scss';

function QuestionPostingBoard() {
  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <span>커뮤니티</span>
        <span>질문해요</span>
      </div>
      <PostingContent />
      <div className={styles.buttonContainer}>
        <Link to='/community'>
          <Button text='취소' className='whiteButton' />
        </Link>
        <Button text='등록' />
      </div>
    </div>
  );
}

export default QuestionPostingBoard;
