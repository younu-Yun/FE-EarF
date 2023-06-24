import styles from './MyPageEdit.module.scss';
import Title from 'components/mypage/common/Title';
import SideNav from 'components/mypage/common/SideNav';
import Edit from 'components/mypage/common/Edit';

function MyPageEdit() {
  return (
    <div>
      <Title />
      <div className={styles.container}>
        <div className={styles.inner}>
          <SideNav />
          <Edit />
        </div>
      </div>
    </div>
  );
}

export default MyPageEdit;
