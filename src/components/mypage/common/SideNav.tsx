import styles from './SideNav.module.scss'

function SideNav() {
  return (
    <div className={styles.sideNavigation}>
      <ul>
        {/*
        <li>
          <NavLink to="/mypage" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
            내 정보
          </NavLink>
        </li>
        */}
        <li>내 정보</li>
        <li>내 게시물</li>
        <li>뱃지</li>
        <li>로그아웃</li>
      </ul>
    </div>
  )
}

export default SideNav;