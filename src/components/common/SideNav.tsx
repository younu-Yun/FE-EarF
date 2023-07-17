import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideNav.module.scss';

import MainLogo from 'assets/images/logo.png';
import githubIcon from 'assets/icons/github.svg';
import gitlabIcon from 'assets/icons/gitlab.svg';

interface SideNavProps {
  isSideNavVisible: boolean;
  handleSideNavToggle: () => void;
  userName: string;
  profileImage: string;
  isLoggedIn: boolean;
  handleUpdateBadge: () => void;
  handleLogout: () => void;
}

function SideNav({
  isSideNavVisible,
  handleSideNavToggle,
  userName,
  profileImage,
  isLoggedIn,
  handleUpdateBadge,
  handleLogout,
}: SideNavProps) {
  return (
    <div className={`${styles.sideNav} ${isSideNavVisible ? styles.on : ''}`}>
      <div className={styles.background} onClick={handleSideNavToggle}></div>
      <div className={styles.sideNavMenu}>
        <div className={styles.inner}>
          <div className={styles.top}>
            <div className={styles.logo}>
              <NavLink to='/' className={styles.logo} onClick={handleSideNavToggle}>
                <div>
                  <img src={MainLogo} alt='사이드메뉴 로고' />
                </div>
              </NavLink>
            </div>
            <div></div>
          </div>
          <div className={styles.contents}>
            {isLoggedIn ? (
              <div className={styles.login}>
                <div className={styles.infoBox}>
                  <span>안녕하세요, {userName}님</span>
                </div>
                <div className={styles.imgBox}>
                  {profileImage !== 'http://34.64.216.86/images/undefined' && <img src={profileImage} alt='profile' />}
                </div>
              </div>
            ) : (
              <div className={styles.login}>
                <NavLink to='/login' className={styles.loginButton} onClick={handleSideNavToggle}>
                  시작하기
                </NavLink>
              </div>
            )}

            <ul className={styles.category}>
              <strong>CATEGORY</strong>
              <li>
                <NavLink to='/calender' onClick={handleSideNavToggle}>
                  기록하기
                </NavLink>
              </li>
              <li>
                <NavLink to='/community' onClick={handleSideNavToggle}>
                  커뮤니티
                </NavLink>
              </li>
            </ul>
            {isLoggedIn && (
              <div className={styles.mypage}>
                <strong>MYPAGE</strong>
                <NavLink to='/mypage/info' onClick={handleSideNavToggle}>
                  내 정보
                </NavLink>
                <NavLink to='/mypage/mycommunity' onClick={handleSideNavToggle}>
                  내 게시글
                </NavLink>
                <NavLink to='/mypage/badge' onClick={handleUpdateBadge}>
                  뱃지
                </NavLink>
                <button onClick={handleLogout}>로그아웃</button>
              </div>
            )}
          </div>
          <ul className={styles.bottom}>
            <li>
              <a href='https://github.com/younu-Yun/FE-EarF' target='_blank' rel='noreferrer'>
                <img src={githubIcon} alt='github' />
              </a>
            </li>
            <li>
              <a
                href='https://kdt-gitlab.elice.io/sw_track/class_04/web_2_project/team09'
                target='_blank'
                rel='noreferrer'
              >
                <img src={gitlabIcon} alt='gitlab' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
