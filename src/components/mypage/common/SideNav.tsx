import styles from './SideNav.module.scss';
import { NavLink } from 'react-router-dom';
import { updateBadge } from 'api/fetcher';

import SideNavInfo from 'assets/icons/SideNavInfo.svg';
import SideNavPost from 'assets/icons/SideNavPost.svg';
import SideNavBadge from 'assets/icons/SideNavBadge.svg';

interface NavLinkItem {
  to: string;
  label: string;
  image: string;
  onclick?: () => void;
}

function SideNav() {
  const handleUpdateBadge = (): void => {
    updateBadge();
  };

  const navLinks: NavLinkItem[] = [
    { to: '/mypage/info', label: '내 정보', image: `${SideNavInfo}` },
    { to: '/mypage/mycommunity', label: '내 게시물', image: `${SideNavPost}` },
    { to: '/mypage/badge', label: '뱃지', image: `${SideNavBadge}`, onclick: handleUpdateBadge },
  ];

  return (
    <div className={styles.sideNavigation}>
      <ul>
        {navLinks.map(({ to, label, image, onclick }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive, isPending }) => (isPending ? styles.inactive : isActive ? styles.active : '')}
              onClick={onclick}
            >
              <div>
                <div className={styles.icon}>
                  <img src={image} alt='' />
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
