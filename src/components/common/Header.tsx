import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
// import axios from 'axios';
import { GetToken, RemoveToken } from './token';
import profileIcon from '../../assets/icons/profile.svg';
import MainLogo from '../../assets/icons/MainLogo.svg';

function Header(): JSX.Element {
  const navigate = useNavigate();
  //토큰여부에 따라 로그인처리
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(Boolean(GetToken()));
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);

  const handleLogout = () => {
    RemoveToken();
    setIsLoggedIn(false);
  };

  const handleMouseOver = () => {
    setShowSideMenu(true);
  };

  const handleMouseLeave = () => {
    setShowSideMenu(false);
  };

  const handleMyPageClick = () => {
    navigate('/mypage');
  };

  return (
    <header>
      <div className={styles.inner}>
        <div>
          <Link to='/' className={styles.logo}>
            <div>
              <img src={MainLogo} alt='메인로고' />
            </div>
            <strong>EarF</strong>
          </Link>
          <ul className={styles.menu}>
            <li>
              <NavLink to='/calender' className={({ isActive }) => (isActive ? 'active' : '')}>
                기록하기
              </NavLink>
            </li>
            <li>
              <NavLink to='/community' className={({ isActive }) => (isActive ? 'active' : '')}>
                커뮤니티
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          {isLoggedIn ? (
            <div
              className={styles.login}
              onClick={handleMyPageClick}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.infoBox}>
                <span>안녕하세요, 윤우정님</span>
              </div>
              <div className={styles.imgBox}>
                <img src={profileIcon} alt='profile' />
              </div>
              {showSideMenu && ( // showSideMenu 상태에 따라 사이드 메뉴 표시 여부 결정
                <div className={styles.sideMenu}>
                  <NavLink to='/mypage'>내 정보</NavLink>
                  <NavLink to='/mypage'>내 게시글</NavLink>
                  <NavLink to='/mypage/badge'>뱃지</NavLink>
                  <button onClick={handleLogout}>로그아웃</button>
                </div>
              )}
            </div>
          ) : (
            <Link to='/login' className={styles.loginButton}>
              시작하기
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
