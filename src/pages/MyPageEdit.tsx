import styles from './MyPageEdit.module.scss';
import Title from 'components/mypage/common/Title';
import SideNav from 'components/mypage/common/SideNav';
import Edit from 'components/mypage/common/Edit';

// 마이페이지는 로그인 된 회원만 접근 가능한 페이지
// 우선 로그인 상황을 가정하고 페이지 작성
// api get요청으로 로그인 된 회원 데이터를 가져옴
function MyPageEdit() {
  return (
    <div>
      <Title />
      <div className={styles.container}>
        <SideNav />
        <Edit />
      </div>
    </div>
  );
}

export default MyPageEdit;
