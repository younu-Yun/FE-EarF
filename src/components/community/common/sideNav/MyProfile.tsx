import { Link } from 'react-router-dom';
import MyProfileImg from './MyProfileImg';
import styles from './MyProfile.module.scss';

function MyProfile() {
  const token = localStorage.getItem('token');
  // const token = 'token';

  return (
    <div className={styles.container}>
      <MyProfileImg />
      <div className={styles.userInfo}>
        <div className={styles.userName}>
          {!token ? (
            <Link to='/login'>
              <span className={styles.notLoggedIn}>로그인</span>
            </Link>
          ) : (
            <span>어프</span>
          )}
          {token && <div className={styles.userBadge}></div>}
        </div>
        {!token ? (
          <span className={`${styles.notLoggedIn} ${styles.userPostingNumber}`}>하러가기</span>
        ) : (
          <div className={styles.userPostingNumber}>
            <span>작성한 글</span>
            <button>17 개</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyProfile;
