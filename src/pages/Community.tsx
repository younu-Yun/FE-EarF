import Title from 'components/community/common/Title';
import SideNav from 'components/community/common/SideNav';
import Main from 'components/community/questionBoard/Board';
import styles from './Community.module.scss';

function Community() {
  return (
    <div className={styles.container}>
      <Title />
      <section className={styles.main}>
        <SideNav />
        <Main />
      </section>
    </div>
  );
}

export default Community;
