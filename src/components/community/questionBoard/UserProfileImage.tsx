import styles from './UserProfileImage.module.scss';

function UserProfileImage() {
  return (
    <div className={styles.container}>
      <div className={styles.userProfile}></div>
      <div className={styles.userBadge}></div>
    </div>
  );
}

export default UserProfileImage;
