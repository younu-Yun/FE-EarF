import { useState } from 'react';
import Title from 'components/community/common/Title';
import SideNav from 'components/community/common/SideNav';
import Board from 'components/community/questionBoard/Board';
import styles from './Community.module.scss';
import QuestionPostingBoard from 'components/community/questionPosting/QuestionPostingBoard';

function Community() {
  const [enterPosting, setEnterPosting] = useState(false);
  const handleEnterPosting: React.MouseEventHandler<HTMLButtonElement> = () => {
    setEnterPosting(true);
  };

  return (
    <div className={styles.container}>
      <Title />
      <section className={styles.main}>
        <SideNav />
        {enterPosting ? <QuestionPostingBoard /> : <Board enterPostingButtonClick={handleEnterPosting} />}
      </section>
    </div>
  );
}

export default Community;
