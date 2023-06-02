import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Header.module.scss';
import profileIcon from '../../assets/icons/profile.svg';

function Header(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);

  const login = async () => {
    try {
      const response = await axios.post('/api/login', {
        username: 'user',
        password: 'password',
      });

      if (response.status === 200) {
        const { token } = response.data;

        setIsLoggedIn(true);
        setToken(token);
      } else {
        // 로그인 실패 처리
      }
    } catch (error) {
      console.error('로그인 요청 중 오류 발생:', error);
    }
  };

  login();

  const handleMouseOver = () => {
    setShowSideMenu(true);
  };

  const handleMouseLeave = () => {
    setShowSideMenu(false);
  };

  return (
    <header>
      <div className={styles.inner}>
        <div>
          <Link to='/' className={styles.logo}>
            로고
          </Link>
          <ul className={styles.menu}>
            <li>
              <NavLink to='/home' className={({ isActive }) => (isActive ? 'active' : '')}>
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
            <Link to='/mypage' className={styles.login} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
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
                  <NavLink to='/badge'>뱃지</NavLink>
                  <button>로그아웃</button>
                </div>
              )}
            </Link>
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
