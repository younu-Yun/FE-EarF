import SideNav from 'components/mypage/common/SideNav';
import Title from 'components/mypage/common/Title';
import styles from './MyCommunity.module.scss';
import Board from 'components/mypage/myCommunity/Board';

function MyCommunity() {
  return (
    <div>
      <Title />
      <div className={styles.container}>
        <div className={styles.inner}>
          <SideNav />
          <Board />
        </div>
      </div>
    </div>
  );
}

export default MyCommunity;
