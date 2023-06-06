import styles from './UserProfile.module.scss';
import UserProfileImg from './UserProfileImg';
import { Link } from 'react-router-dom';

function UserProfile() {
  const token = localStorage.getItem('token');

  return (
    <div className={styles.container}>
      <UserProfileImg />
      <div className={styles.userInfo}>
        <div className={styles.userName}>
          <span>어프</span>
          {token && <div className={styles.userBadge}></div>}
        </div>
        {!token ? (
          <Link to='/login'>
            <span className={styles.notLoggedIn}>로그인이 필요합니다.</span>
          </Link>
        ) : (
          <div className={styles.userPostingNumber}>
            <span>내가 쓴 글</span>
            <button>17 개</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
