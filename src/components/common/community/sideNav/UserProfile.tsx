import styles from './UserProfile.module.scss';
import UserProfileImg from './UserProfileImg';

function UserProfile() {
  return (
    <div className={styles.container}>
      <UserProfileImg />
      <div className={styles.userInfo}>
        <div>
          <span>사용자명</span>
          <div>뱃지</div>
        </div>
        <div className={styles.userPostingNumber}>
          <span>내가 쓴 글</span>
          <span>17개</span>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
