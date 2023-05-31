import styles from './UserProfile.module.scss';
import UserProfileImg from './UserProfileImg';

function UserProfile() {
  return (
    <div className={styles.container}>
      <UserProfileImg />
      <div className={styles.userInfo}>
        <div className={styles.userName}>
          <span>어프</span>
          <div className={styles.userBadge}> </div>
        </div>
        <div className={styles.userPostingNumber}>
          <span>내가 쓴 글</span>
          <button>17 개</button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
