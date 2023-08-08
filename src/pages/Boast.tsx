import Title from 'components/common/Title';
import SideMenu from 'components/common/SideMenu';
import RightSideNav from 'components/community/common/RightSideNav';
import Board from 'components/community/boastBoard/Board';
import styles from './Community.module.scss';
import ScrollToTopOnPageLoad from 'components/common/ScrollTopOnPageLoad';

function Boast() {
  return (
    <div className={styles.container}>
      <Title />
      <section className={styles.main}>
        <SideMenu />
        <Board />
        <RightSideNav />
        <ScrollToTopOnPageLoad />
      </section>
    </div>
  );
}

export default Boast;
