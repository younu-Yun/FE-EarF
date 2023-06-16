import { NavLink } from 'react-router-dom';
import MyProfile from './sideNav/MyProfile';
import styles from './LeftSideNav.module.scss';

import SideNavQuestion from 'assets/icons/SideNavQuestion.svg';
import SideNavBoast from 'assets/icons/SideNavBoast.svg';

function LeftSideNav() {
  return (
    <div>
      <aside className={styles.container}>
        <MyProfile />
        <nav>
          <ul>
            <li>
              <NavLink
                to='/community'
                className={({ isActive, isPending }) => (isPending ? styles.inactive : isActive ? styles.active : '')}
              >
                <div>
                  <div className={styles.icon}>
                    <img src={SideNavQuestion} alt='' />
                  </div>
                  <span>질문해요</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/community/boast'
                className={({ isActive, isPending }) => (isPending ? styles.inactive : isActive ? styles.active : '')}
              >
                <div>
                  <div className={styles.icon}>
                    <img src={SideNavBoast} alt='' />
                  </div>
                  <span>자랑해요</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default LeftSideNav;
