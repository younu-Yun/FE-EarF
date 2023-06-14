import profileDefault from 'assets/images/profileDefault.png';
import styles from './UserProfile.module.scss';

function UserProfile(props: { profileImage?: string; username?: string }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {props.profileImage ? (
          <img className={styles.userProfile} src={props.profileImage} alt='Profile' />
        ) : (
          <img src={profileDefault} className={styles.userProfile} />
        )}
      </div>
      <span className={styles.userName}>{props.username}</span>
    </div>
  );
}

export default UserProfile;
