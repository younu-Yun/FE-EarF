import styles from './Title.module.scss';
import { useLocation } from 'react-router-dom';

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
      <h2>{pageTitle}</h2>
    </div>
  );
}

export default Title;
