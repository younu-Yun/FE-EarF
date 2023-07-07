import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { useGetUserInfoQuery } from 'api/communityApiSlice';

import SectionMain from 'components/home/SectionMain';
import SectionBadge from 'components/home/SectionBadge';
import SectionDiary from 'components/home/SectionDiary';
import SectionCommunity from 'components/home/SectionCommunity';

function Home() {
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const { data: userInfo } = useGetUserInfoQuery();

  if (isLoggedIn && userInfo) {
    localStorage.setItem('badge', userInfo.checkedBadge);
  }

  return (
    <div className={styles.container}>
      <main>
        <SectionMain />
        <SectionDiary />
        <SectionCommunity />
        <SectionBadge />
        <div className={styles.link}>
          <div>
            <h2>지금 바로 시작하고 싶다면?</h2>
            {isLoggedIn ? <Link to='/calender'>시작하기</Link> : <Link to='/join'>시작하기</Link>}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
