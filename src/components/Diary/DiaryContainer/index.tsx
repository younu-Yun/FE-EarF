import React, { useState } from 'react';
import styles from './styles.module.scss';
import IsPostDataDiary from './IsPostDataDiary';
import IsReportDataDiary from './IsReportDataDiary';

export default function DiaryContainer() {
  const [isReport, setIsReport] = useState(false);

  const handleReportClick = () => {
    setIsReport(true);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleReportClick}>리포트 보기</button>
      {isReport ? <IsPostDataDiary /> : <IsReportDataDiary />}
    </div>
  );
}
