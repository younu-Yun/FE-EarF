import styles from './UserProfile.module.scss';

function UserProfile(props: { username?: string | '이채연' }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <div className={styles.userProfile} />
        {/* <div className={styles.userBadge}></div> */}
      </div>
      <span className={styles.userName}>{props.username}</span>
    </div>
  );
}

export default UserProfile;
