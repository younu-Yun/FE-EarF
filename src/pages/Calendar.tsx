import { useState } from 'react';

import Calender from 'components/Calender';
import DiaryContainer from 'components/Diary/DiaryContainer';
import IsReportDataDiary from 'components/Diary/IsReportDataDiary';

import styles from './Calendar.module.scss';

export default function Calendar() {
  const [isReport, setIsReport] = useState(false);

  const handleReportClick = () => {
    setIsReport(!isReport);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.calendar}>
          <Calender />
        </div>
        <div className={styles.post}>{!isReport ? <DiaryContainer /> : <IsReportDataDiary />}</div>

        <div className={styles.switchBox}>
          <strong>{!isReport ? '통계보기' : '기록하기'}</strong>
          <label
            htmlFor='diarySwitch'
            className={`${styles.switch} ${isReport ? styles.on : ''}`}
            onClick={handleReportClick}
          >
            <span className={styles.slider}></span>
          </label>
          <input type='checkbox' id='diarySwitch' />
        </div>
      </div>
    </div>
  );
}
