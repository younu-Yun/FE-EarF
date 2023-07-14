import { useState } from 'react';

import Calender from 'components/Calender';
import DiaryContainer from 'components/Diary/DiaryContainer';
import changeView from 'assets/images/changeview.png';
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
        <div className={styles.toggleBox}>
          <button onClick={handleReportClick}>
            <img src={changeView} alt='changeviewbutton' />
          </button>
        </div>
      </div>
    </div>
  );
}
