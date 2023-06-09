import { Link } from 'react-router-dom';
import styles from './RightSideNav.module.scss';
import BestPost from './sideNav/BestPost';
import NewComment from './sideNav/NewComment';

function RightSideNav() {
  return (
    <div>
      <aside className={styles.container}>
        <ul className={styles.bestPostContainer}>
          <li className={styles.subTitle}>주간 인기글</li>
          <BestPost />
          <BestPost />
          <BestPost />
          <BestPost />
          <BestPost />
        </ul>
        <div className={styles.newPostContainer}>
          <span className={styles.subTitle}>최신 댓글</span>
          <NewComment
            title='제목 내용 테스트입니다. 제목 내용 테스트입니다.'
            comment='댓글 내용 테스트입니다. 댓글 내용 테스트입니다.'
          />
        </div>
      </aside>
    </div>
  );
}

export default RightSideNav;
