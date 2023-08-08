import Title from 'components/common/Title';
import styles from './MyBadge.module.scss';
import Badge from 'components/mypage/common/Badge';
import SideMenu from 'components/common/SideMenu';

function MyBadge() {
  return (
    <div>
      <Title />
      <div className={styles.container}>
        <div className={styles.inner}>
          <SideMenu />
          <Badge />
        </div>
      </div>
    </div>
  );
}

export default MyBadge;
