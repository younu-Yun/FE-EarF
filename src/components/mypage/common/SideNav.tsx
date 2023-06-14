import styles from './SideNav.module.scss';
import { NavLink } from 'react-router-dom';
import { userLogout, updateBadge } from 'api/fetcher';
import { clearLocalStorage } from 'api/token';

interface NavLinkItem {
  to: string;
  label: string;
  onclick?: () => void;
}

function SideNav() {
  const handleUpdateBadge = () => {
    updateBadge();
    console.log('뱃지가 업데이트 되었습니다');
  };

  const handleLogout = async () => {
    try {
      await userLogout();
      clearLocalStorage();
      alert('로그아웃이 완료되었습니다');
      window.location.href = '/';
    } catch (error) {
      console.error('로그아웃 실패', error);
    }
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
              {label}
            </NavLink>
          </li>
        ))}
        <li onClick={handleLogout}>로그아웃</li>
      </ul>
    </div>
  );
}

export default SideNav;
