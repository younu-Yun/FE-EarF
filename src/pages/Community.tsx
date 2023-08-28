import React, { Suspense } from 'react';
import Title from 'components/common/Title';
import RightSideNav from 'components/community/common/RightSideNav';
import SideMenu from 'components/common/SideMenu';
import styles from './Community.module.scss';
import ScrollToTopOnPageLoad from 'components/common/ScrollTopOnPageLoad';
const Board = React.lazy(() => import('components/community/questionBoard/Board'));

function Community() {
  return (
    <div className={styles.container}>
      <ScrollToTopOnPageLoad />
      <Title />
      <section className={styles.main}>
        <SideMenu />
        <Suspense fallback={<div>Loading...</div>}>
          <Board />
        </Suspense>
        <RightSideNav />
      </section>
    </div>
  );
}

export default Community;
