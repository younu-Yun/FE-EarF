import React from 'react';
import MyProfile from 'components/community/common/sideNav/MyProfile';
import { Link, useLocation } from 'react-router-dom';
import { updateBadge } from 'api/fetcher';
import styles from './SideMenu.module.scss';

import SideNavQuestion from 'assets/icons/SideNavQuestion.svg';
import SideNavBoast from 'assets/icons/SideNavBoast.svg';
import SideNavInfo from 'assets/icons/SideNavInfo.svg';
import SideNavPost from 'assets/icons/SideNavPost.svg';
import SideNavBadge from 'assets/icons/SideNavBadge.svg';

interface NavLinkItem {
  to: string;
  label: string;
  image: string;
  onclick?: () => void;
}

export default function SideMenu() {
  const location = useLocation();
  const handleUpdateBadge = (): void => {
    updateBadge();
  };

  const communityMenus: NavLinkItem[] = [
    { to: '/community', label: '질문해요', image: `${SideNavQuestion}` },
    { to: '/community/boast', label: '자랑해요', image: `${SideNavBoast}` },
  ];

  const mypageMenus: NavLinkItem[] = [
    { to: '/mypage/info', label: '내 정보', image: `${SideNavInfo}` },
    { to: '/mypage/mycommunity', label: '내 게시물', image: `${SideNavPost}` },
    { to: '/mypage/badge', label: '뱃지', image: `${SideNavBadge}`, onclick: handleUpdateBadge },
  ];

  const isCommunity = location.pathname.startsWith('/community');
  const menuItems = isCommunity ? communityMenus : mypageMenus;

  return (
    <>
      <aside className={`${styles.container} ${isCommunity ? styles.community : styles.mypage}`}>
        {isCommunity && <MyProfile />}
        <nav>
          <ul>
            {menuItems.map(({ to, label, image, onclick }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={styles.link + (window.location.pathname === to ? ' ' + styles.active : '')}
                  onClick={onclick}
                >
                  <div>
                    <div className={styles.icon}>
                      <img src={image} alt='사이드메뉴_이미지' />
                    </div>
                    <span>{label}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
