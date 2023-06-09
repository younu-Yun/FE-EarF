import { ReactComponent as UserIcon } from 'assets/icons/UserIcon.svg';
import styles from './MyProfileImg.module.scss';

function MyProfileImg() {
  const token = localStorage.getItem('token');
  // const token = 'token';
  return <>{token ? <div className={styles.imgContainer}></div> : <UserIcon className={styles.notLoggedIn} />}</>;
}

export default MyProfileImg;
