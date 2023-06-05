import { ReactComponent as UserIcon } from 'assets/icons/UserIcon.svg';
import styles from './UserProfileImg.module.scss';

function UserProfileImg() {
  const token = localStorage.getItem('token');
  return <>{token ? <div className={styles.imgContainer}></div> : <UserIcon className={styles.notLoggedIn} />}</>;
}

export default UserProfileImg;
