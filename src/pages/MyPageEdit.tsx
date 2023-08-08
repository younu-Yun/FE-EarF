import styles from './MyPageEdit.module.scss';
import SideMenu from 'components/common/SideMenu';
import Title from 'components/common/Title';
import Edit from 'components/mypage/common/Edit';

function MyPageEdit() {
  return (
    <div>
      <Title />
      <div className={styles.container}>
        <div className={styles.inner}>
          <SideMenu />
          <Edit />
        </div>
      </div>
    </div>
  );
}

export default MyPageEdit;
