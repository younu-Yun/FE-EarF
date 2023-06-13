import React, { useState } from 'react';
import Calender from 'components/Calender';
import DiaryPost from 'components/Diary';
import DiaryContainer from 'components/Diary/DiaryContainer';
import IsPostDataDiary from 'components/Diary/IsPostDataDiary';

import changeView from 'assets/images/changeview.png';

import { getApiCalendarEachData } from 'services/calendarApiService';

import { useSelector } from 'react-redux';
import { RootState } from 'store';

import styles from './Calendar.module.scss';
import IsReportDataDiary from 'components/Diary/IsReportDataDiary';

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
