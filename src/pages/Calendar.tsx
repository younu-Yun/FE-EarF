import React, { useState } from 'react';
import Calender from 'components/Calender';
import DiaryPost from 'components/Diary';
import DiaryContainer from 'components/Diary/DiaryContainer';

import { getApiCalendarEachData } from 'services/calendarApiService';

import { useSelector } from 'react-redux';
import { RootState } from 'store';

import styles from './Calendar.module.scss';

export default function Calendar() {
  const [isDataInDay, setIsDataInDay] = useState(false);

  const selectedValue = useSelector((state: RootState) => state.selectedDay.value);

  console.log(selectedValue, 'in calendar');

  // 해당 일자에 데이터가 있으면 그 데이터를 보여주고 없으면 post로 등록할 수 있는 컴포넌트를 출력
  getApiCalendarEachData(selectedValue).then((data) => {
    console.log(data, 'api data in calendar');
    if (data !== null) {
      setIsDataInDay(true);
    } else {
      setIsDataInDay(false);
    }
  });

  return (
    <div className='wrapper'>
      <div className='custom-calendar-container'>
        <Calender />
      </div>
      {isDataInDay ? <DiaryContainer /> : <DiaryPost />}
    </div>
  );
}
