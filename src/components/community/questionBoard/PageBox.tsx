import { useState } from 'react';
import Pagination from 'react-js-pagination';
import styles from './PageBox.module.scss';

function PageBox() {
  const [page, setPage] = useState(1);

  const movePage = (page: number) => {
    setPage(page);
  };

  return (
    <div className={styles.pageContainer}>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={50}
        pageRangeDisplayed={5}
        prevPageText='‹'
        nextPageText='›'
        onChange={movePage}
      />
    </div>
  );
}

export default PageBox;
