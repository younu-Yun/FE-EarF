import styles from './MyPage.module.scss';
import Title from 'components/mypage/common/Title';
import SideNav from 'components/mypage/common/SideNav';
import Main from 'components/mypage/common/Main';

// 마이페이지는 로그인 된 회원만 접근 가능한 페이지
// 우선 로그인 상황을 가정하고 페이지 작성
// api get요청으로 로그인 된 회원 데이터를 가져옴
function MyPage() {
  return (
    <div>
      <Title />
      <div className={styles.container}>
        <div className={styles.inner}>
          <SideNav />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default MyPage;
