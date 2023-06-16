import styles from './SideNav.module.scss';
import { NavLink } from 'react-router-dom';
import { updateBadge } from 'api/fetcher';
import HomeCheck from 'assets/icons/HomeCheck.svg';

interface NavLinkItem {
  to: string;
  label: string;
  onclick?: () => void;
}

function SideNav() {
  const handleUpdateBadge = (): void => {
    updateBadge();
  };

  const navLinks: NavLinkItem[] = [
    { to: '/mypage/info', label: '내 정보' },
    { to: '/mypage/mycommunity', label: '내 게시물' },
    { to: '/mypage/badge', label: '뱃지', onclick: handleUpdateBadge },
  ];

  return (
    <div className={styles.sideNavigation}>
      <ul>
        {navLinks.map(({ to, label, onclick }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive, isPending }) => (isPending ? styles.inactive : isActive ? styles.active : '')}
              onClick={onclick}
            >
              <div>
                <div className={styles.icon}>
                  <img src={HomeCheck} alt='' />
                </div>
                <span>{label}</span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNav;
