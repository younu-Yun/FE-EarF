import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { getApiCalendarAllData, getApiCalendarHavedata } from 'services/calendarApiService';
import { RootState } from 'store';
import { setSelectedDay } from 'store/selectedDaySlice';

import notPost from 'assets/images/notpost.png';

import './styles.scss';
import { GetTagImage } from 'services/calendarService';

// localStorage.setItem(
//   'token',
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDg4MDc4NjAzNzUyNDk2ZDhlODJmYTQiLCJpZCI6ImNrZGd1czg3MzQiLCJuYW1lIjoi7Jik7LC97ZiEIiwiZW1haWwiOiJja2RndXM1MTg5QGdtYWlsLmNvbSIsImlhdCI6MTY4NjY0MDExMywiZXhwIjoxNjg2NjQzNzEzfQ.qLH4P7NBae_ADVh4H9guZOVhxwnb7MlHcxa9_Eygo34'
// );

export default function Calender() {
  const [markData, setMarkData] = useState<string[]>();

  const dispatch = useDispatch();
  const selectedValue = useSelector((state: RootState) => state.selectedDay.value);

  const handleDateChange = (date: any) => {
    dispatch(setSelectedDay(dayjs(date?.toString()).format('YYYY MM DD')));
  };
  const handleActiveStartDateChange = (date: any) => {
    handleDateChange(dayjs(date?.toString()).format('YYYY MM DD'));
  };

  const paramsMonth = dayjs(selectedValue).format('YYYY-MM');

  useEffect(() => {
    //TODO: 이건 리포트 데이터임
    getApiCalendarAllData(paramsMonth).then((data) => {
      console.log(data, ' dataetat');
    });

    //TODO: 이건 캘린더에 보여줄 데이터
    getApiCalendarHavedata(paramsMonth).then((data: string[]) => {
      console.log(data, '데이터 있는 날짜 배열');
      setMarkData(data);
    });
  }, [selectedValue]);

  return (
    <>
      <Calendar
        locale='en'
        className='container'
        onChange={handleDateChange}
        value={selectedValue}
        minDetail='month'
        maxDetail='month'
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
        onActiveStartDateChange={({ activeStartDate }) => handleActiveStartDateChange(activeStartDate)}
        formatDay={(locale, date) => dayjs(date).format('DD')}
        tileContent={({ date }) => {
          const foundMark = markData?.find((x) => x[0] === dayjs(date).format('YYYY-MM-DD'));
          if (foundMark !== undefined && foundMark !== null) {
            const tagImageSrc = GetTagImage(parseInt(foundMark[1]));
            return <img src={tagImageSrc} alt='notPost' className='notPost' />;
          } else {
            return <img src={notPost} alt='notPost' className='notPost' />;
          }
        }}
      />
      <div>{dayjs(selectedValue?.toString()).format('YYYY년 MM월 DD일')}</div>
    </>
  );
}
