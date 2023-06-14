import SideNav from 'components/mypage/common/SideNav';
import Title from 'components/mypage/common/Title';
import styles from './MyCommunity.module.scss';
import Board from 'components/mypage/myCommunity/Board';
import ScrollToTopOnPageLoad from 'components/common/ScrollTopOnPageLoad';

function MyCommunity() {
  return (
    <div className={styles.container}>
      <ScrollToTopOnPageLoad />
      <Title />
      <section className={styles.main}>
        <SideNav />
        <Board />
      </section>
    </div>
  );
}

export default MyCommunity;
