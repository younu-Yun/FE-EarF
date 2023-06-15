import Title from 'components/mypage/common/Title';
import styles from './MyBadge.module.scss';
import SideNav from 'components/mypage/common/SideNav';
import Badge from 'components/mypage/common/Badge';

function MyBadge() {
  return (
    <div>
      <Title />
      <div className={styles.container}>
        <div className={styles.inner}>
          <SideNav />
          <Badge />
        </div>
      </div>
    </div>
  );
}

export default MyBadge;
