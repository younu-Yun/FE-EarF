import styles from './SideNav.module.scss';
import { NavLink } from 'react-router-dom';
function SideNav() {
  return (
    <div className={styles.sideNavigation}>
      <ul>
        <li>
          <NavLink
            to='/mypage/info'
            className={({ isActive, isPending }) => (isPending ? styles.inactive : isActive ? styles.active : '')}
          >
            내 정보
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/mypage/mycommunity'
            className={({ isActive, isPending }) => (isPending ? styles.inactive : isActive ? styles.active : '')}
          >
            내 게시물
          </NavLink>
        </li>
        <li>뱃지</li>
        <li>로그아웃</li>
      </ul>
    </div>
  );
}

export default SideNav;
