import { Link } from 'react-router-dom';
import MyProfile from './sideNav/MyProfile';
import styles from './LeftSideNav.module.scss';
import HomeCheck from 'assets/icons/HomeCheck.svg';

function LeftSideNav() {
  return (
    <div>
      <aside className={styles.container}>
        <MyProfile />
        <nav>
          <ul>
            <li>
              <Link to='/community'>
                <div>
                  <div className={styles.icon}>
                    <img src={HomeCheck} alt='' />
                  </div>
                  <span>질문해요</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/community/boast'>
                <div>
                  <div className={styles.icon}>
                    <img src={HomeCheck} alt='' />
                  </div>
                  <span>자랑해요</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default LeftSideNav;
