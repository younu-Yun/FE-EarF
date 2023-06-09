import getPostingTime from 'utils/getPostingTime';
import styles from './UnsolvedQuestion.module.scss';
import UserProfile from '../common/sideNav/UserProfile';

function UnsolvedQuestion() {
  const date = '2023-05-19T12:04:55.676Z';

  return (
    <li className={styles.questionContainer}>
      <UserProfile />
      <p>재활용품 항목을 어디서 볼 수 있을까요?</p>
      <p>{getPostingTime(date)}</p>
    </li>
  );
}

export default UnsolvedQuestion;
