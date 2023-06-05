import SideNav from 'components/mypage/common/SideNav';
import Title from 'components/mypage/common/Title';
import styles from './MyCommunity.module.scss';

function MyCommunity() {
  return (
    <div>
      <Title />
      <div className={styles.container}>
        <SideNav />
        MyCommunity
      </div>
    </div>
  );
}

export default MyCommunity;
