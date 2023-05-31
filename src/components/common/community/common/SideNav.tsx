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
            <li>d</li>
            <li>d</li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default SideNav;
