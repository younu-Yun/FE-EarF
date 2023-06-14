import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import Calendar from 'react-calendar';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

import { getApiCalendarHavedata } from 'services/calendarApiService';
import { setSelectedDay } from 'store/selectedDaySlice';
import { GetTagImage } from 'services/calendarService';
import notPost from 'assets/images/notpost.png';

import 'react-calendar/dist/Calendar.css';
import './styles.scss';

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
    getApiCalendarHavedata(paramsMonth).then((data: string[]) => {
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
