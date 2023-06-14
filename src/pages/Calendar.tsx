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
    <div className='wrapper'>
      <div className='custom-calendar-container'>
        <Calender />
      </div>
      <button className={styles.changeButton} onClick={handleReportClick}>
        <img src={changeView} alt='changeviewbutton' />
      </button>
      {!isReport ? <DiaryContainer /> : <IsReportDataDiary />}
    </div>
  );
}
