import Title from 'components/common/Title';
import Board from 'components/community/questionBoard/Board';
import RightSideNav from 'components/community/common/RightSideNav';
import SideMenu from 'components/common/SideMenu';
import styles from './Community.module.scss';
import ScrollToTopOnPageLoad from 'components/common/ScrollTopOnPageLoad';

function Community() {
  return (
    <div className={styles.container}>
      <ScrollToTopOnPageLoad />
      <Title />
      <section className={styles.main}>
        <SideMenu />
        <Board />
        <RightSideNav />
      </section>
    </div>
  );
}

export default Community;
