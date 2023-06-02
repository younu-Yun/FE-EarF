import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.scss';
import dayjs from 'dayjs';

type ValuePiece = Date | null;

export default function Calender() {
  const [value, onChange] = useState<ValuePiece | [ValuePiece, ValuePiece]>(new Date());

  console.log(value, 'value');

  const mark = ['2023-06-02', '2022-06-05', '2023-06-10'];

  return (
    <div className='custom-calendar-container'>
      <Calendar
        locale='en'
        className='container'
        onChange={onChange}
        value={value}
        minDetail='month'
        maxDetail='month'
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
        formatDay={(locale, date) => dayjs(date).format('DD')}
        tileContent={({ date, view }) => {
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
      <div>{dayjs(value?.toString()).format('YYYY년 MM월 DD일')}</div>
    </div>
  );
}
