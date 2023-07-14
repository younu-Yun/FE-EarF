import { useState } from 'react';

import DiaryPost from 'components/Diary';
import IsPostDataDiary from '../IsPostDataDiary';

import { GetSelectedDateState } from 'services/calendarService';
import { getApiCalendarEachData } from 'services/calendarApiService';

import styles from './styles.module.scss';

export default function DiaryContainer() {
  const [isDataInDay, setIsDataInDay] = useState(false);

  const selectedValue = GetSelectedDateState();

  getApiCalendarEachData(selectedValue).then((data) => {
    if (data !== null) {
      setIsDataInDay(true);
    } else {
      setIsDataInDay(false);
    }
  });

  return <>{isDataInDay ? <IsPostDataDiary /> : <DiaryPost />}</>;
}
