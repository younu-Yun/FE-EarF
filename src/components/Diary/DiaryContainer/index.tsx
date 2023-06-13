import { useState } from 'react';

import DiaryPost from 'components/Diary';
import IsPostDataDiary from '../IsPostDataDiary';

import { RootState } from 'store';
import { useSelector } from 'react-redux';

import { getApiCalendarEachData } from 'services/calendarApiService';

import styles from './styles.module.scss';

export default function DiaryContainer() {
  const [isDataInDay, setIsDataInDay] = useState(false);

  const selectedValue = useSelector((state: RootState) => state.selectedDay.value);

  console.log(selectedValue, 'in calendar');

  getApiCalendarEachData(selectedValue).then((data) => {
    console.log(data, 'api data in calendar');
    if (data !== null) {
      setIsDataInDay(true);
    } else {
      setIsDataInDay(false);
    }
  });

  return <div className={styles.container}>{isDataInDay ? <IsPostDataDiary /> : <DiaryPost />}</div>;
}
