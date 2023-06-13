import { useState } from 'react';
import styles from './styles.module.scss';
import IsPostDataDiary from '../IsPostDataDiary';
import DiaryPost from 'components/Diary';

import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { getApiCalendarEachData } from 'services/calendarApiService';

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
