import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import Calendar from 'react-calendar';

import { useDispatch } from 'react-redux';

import { getApiCalendarHavedata } from 'services/calendarApiService';
import { setSelectedDay } from 'store/selectedDaySlice';
import { GetTagImage, GetFormatDate, GetSelectedDateState } from 'services/calendarService';
import notPost from 'assets/images/notpost.png';

import 'react-calendar/dist/Calendar.css';
import './styles.scss';

export default function Calender() {
  const [markData, setMarkData] = useState<string[]>();

  const dispatch = useDispatch();
  const selectedValue = GetSelectedDateState();

  const handleDateChange = (date: any) => {
    const formatData = GetFormatDate(date);
    dispatch(setSelectedDay(formatData));
  };
  const handleActiveStartDateChange = (date: any) => {
    const formatData = GetFormatDate(date);
    handleDateChange(formatData);
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
        className='calendar-box'
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
    </>
  );
}
