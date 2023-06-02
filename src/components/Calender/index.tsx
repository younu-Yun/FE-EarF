import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.scss';
import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setSelectedDay } from 'store/selectedDaySlice';

type ValuePiece = Date | null;

export default function Calender() {
  // const [value, onChange] = useState<ValuePiece | [ValuePiece, ValuePiece]>(new Date());

  // console.log(value, 'value');

  const mark = ['2023-06-02', '2023-06-05', '2023-06-10'];

  const dispatch = useDispatch();
  const selectedValue = useSelector((state: RootState) => {
    return state.selectedDay.value;
  });

  const handleDateChange = (date: any) => {
    dispatch(setSelectedDay(dayjs(date?.toString()).format('YYYY MM DD')));
  };

  console.log(selectedValue, 'couut');

  return (
    <div className='wrapper'>
      <div className='custom-calendar-container'>
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
          formatDay={(locale, date) => dayjs(date).format('DD')}
          tileContent={({ date }) => {
            const foundMark = mark.find((x) => x === dayjs(date).format('YYYY-MM-DD'));
            if (foundMark !== undefined && foundMark !== null) {
              return (
                <>
                  <div className='tileContent'>
                    <div className={true ? 'dot1' : 'dot2'}></div>
                  </div>
                </>
              );
            }
          }}
        />
        <div>{dayjs(selectedValue?.toString()).format('YYYY년 MM월 DD일')}</div>
      </div>
      <div className='container2'>
        <div className='tagContainer'>
          <span>태그</span>
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
        </div>
        <div className='recordContainer'>
          <span>기록</span>
          <input placeholder='sadf' />
          <input placeholder='sadf' />
          <input placeholder='sadf' />
          <button>등록</button>
        </div>
      </div>
    </div>
  );
}
