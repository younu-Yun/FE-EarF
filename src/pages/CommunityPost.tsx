import Title from 'components/common/Title';
import SideMenu from 'components/common/SideMenu';
import RightSideNav from 'components/community/common/RightSideNav';
import QuestionPostingBoard from 'components/community/questionPost/QuestionPostingBoard';
import styles from './Community.module.scss';
import ScrollToTopOnPageLoad from 'components/common/ScrollTopOnPageLoad';

function CommunityPost() {
  return (
    <div className={styles.container}>
      <ScrollToTopOnPageLoad />
      <Title />
      <section className={styles.main}>
        <SideMenu />
        <QuestionPostingBoard />
        <RightSideNav />
      </section>
    </div>
  );
}

export default CommunityPost;
