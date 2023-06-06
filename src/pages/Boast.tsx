import Title from 'components/community/common/Title';
import SideNav from 'components/community/common/SideNav';
import Board from 'components/community/boastBoard/Board';
import styles from './Community.module.scss';

function Boast() {
  return (
    <div className={styles.container}>
      <Title />
      <section className={styles.main}>
        <SideNav />
        <Board />
      </section>
    </div>
  );
}

export default Boast;
