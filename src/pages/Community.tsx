import Title from 'components/common/community/common/Title';
import SideNav from 'components/common/community/common/SideNav';
import Main from 'components/common/community/common/Main';
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
