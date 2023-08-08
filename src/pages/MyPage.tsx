import styles from './MyPage.module.scss';
import SideMenu from 'components/common/SideMenu';
import Main from 'components/mypage/common/Main';
import Title from 'components/common/Title';

function MyPage() {
  return (
    <div>
      <Title />
      <div className={styles.container}>
        <div className={styles.inner}>
          <SideMenu />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default MyPage;
