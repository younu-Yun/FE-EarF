import Title from 'components/community/common/Title';
import SideNav from 'components/community/common/SideNav';
import QuestionPostingBoard from 'components/community/questionPosting/QuestionPostingBoard';
import styles from './Community.module.scss';

function CommunityPosting() {
  return (
    <div className={styles.container}>
      <Title />
      <section className={styles.main}>
        <SideNav />
        <QuestionPostingBoard />
      </section>
    </div>
  );
}

export default CommunityPosting;
