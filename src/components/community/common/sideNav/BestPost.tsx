import UserReaction from '../UserReaction';
import styles from './BestPost.module.scss';

export default function BestPost() {
  return (
    <li className={styles.container}>
      <p>추천 게시글 제목입니다. 테스트 중</p>
      <div>
        <UserReaction />
      </div>
    </li>
  );
}
