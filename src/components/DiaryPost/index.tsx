import React from 'react';
import styles from './styles.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setSelectedDay } from 'store/selectedDaySlice';
import DiaryButton from './common/DiaryButton';

export default function Diary() {
  const selectedValue = useSelector((state: RootState) => {
    return state.selectedDay.value;
  });
  console.log(selectedValue, 'in diary state');
  return (
    <div className={styles.container}>
      <div className={styles.tagContainer}>
        <span>태그</span>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>
      <div className={styles.recordContainer}>
        <span>기록</span>
        <input placeholder='사진' style={{ fontSize: 30 }} />
        <input placeholder='행동 한마디' />
        <input placeholder='오늘 어떤 행동을 했나요 ?' />
      </div>
      <DiaryButton text='등록하기' />
    </div>
  );
}
