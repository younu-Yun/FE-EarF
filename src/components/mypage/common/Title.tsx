import styles from './Title.module.scss';
import { useLocation } from 'react-router-dom';

// 추후 interface 추출하여 따로 관리하기
interface PageType {
  INFO: string;
  EDIT: string;
  MYCOMMUNITY: string;
  BADGE: string;
}

const Pages: PageType = {
  INFO: 'info',
  EDIT: 'edit',
  MYCOMMUNITY: 'mycommunity',
  BADGE: 'badge',
};

// 현재 URL을 가져와 /mypage/ 이후의 값만 사용하도록 바꾸는 함수
function useLastPath() {
  const location = useLocation();
  const nowPath = location.pathname.replace('/mypage/', '');
  return nowPath;
}

function Title() {
  const nowPath = useLastPath();

  const pageTitleMap: { [key: string]: string } = {
    [Pages.INFO]: '내 정보',
    [Pages.EDIT]: '내정보 : 수정하기',
    [Pages.MYCOMMUNITY]: '내 게시물',
    [Pages.BADGE]: '뱃지',
  };

  const pageTitle = pageTitleMap[nowPath] || 'Unknown Page';

  return (
    <div className={styles.title}>
      <div>{pageTitle}</div>
    </div>
  );
}

export default Title;
