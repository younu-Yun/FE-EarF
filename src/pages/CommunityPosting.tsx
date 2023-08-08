import Title from 'components/common/Title';
import SideMenu from 'components/common/SideMenu';
import RightSideNav from 'components/community/common/RightSideNav';
import QuestionPostingBoard from 'components/community/questionPosting/QuestionPostingBoard';
import styles from './Community.module.scss';

function CommunityPosting() {
  return (
    <div className={styles.container}>
      <Title />
      <section className={styles.main}>
        <SideMenu />
        <QuestionPostingBoard />
        <RightSideNav />
      </section>
    </div>
  );
}

export default CommunityPosting;
