import UserProfile from '../sideNav/UserProfile';
import styles from './SideNav.module.scss';

function SideNav() {
  return (
    <div>
      <aside className={styles.container}>
        <UserProfile />
        <hr />
        <nav>
          <ul>
            <li>질문해요</li>
            <li>자랑해요</li>
            <li>함께해요</li>
            <li>소개해요</li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default SideNav;
