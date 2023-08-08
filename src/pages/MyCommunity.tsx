import SideMenu from 'components/common/SideMenu';
import Title from 'components/common/Title';
import styles from './MyCommunity.module.scss';
import Board from 'components/mypage/myCommunity/Board';

function MyCommunity() {
  return (
    <div>
      <Title />
      <div className={styles.container}>
        <div className={styles.inner}>
          <SideMenu />
          <Board />
        </div>
      </div>
    </div>
  );
}

export default MyCommunity;
