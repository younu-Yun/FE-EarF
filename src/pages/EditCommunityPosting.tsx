import Title from 'components/common/Title';
import SideMenu from 'components/common/SideMenu';
import RightSideNav from 'components/community/common/RightSideNav';
import styles from './Community.module.scss';
import EditQuestionPostingBoard from 'components/community/questionPosting/EditQuestionPostingBoard';

function EditCommunityPosting() {
  return (
    <div className={styles.container}>
      <Title />
      <section className={styles.main}>
        <SideMenu />
        <EditQuestionPostingBoard />
        <RightSideNav />
      </section>
    </div>
  );
}

export default EditCommunityPosting;
