import React from 'react';
import './styles.scss';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setSelectedDay } from 'store/selectedDaySlice';

export default function Diary() {
  const selectedValue = useSelector((state: RootState) => {
    return state.selectedDay.value;
  });
  console.log(selectedValue, 'in diary state');
  return (
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
  );
}
