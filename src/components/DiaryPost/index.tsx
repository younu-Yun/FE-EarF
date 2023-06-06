import React from 'react';
import styles from './styles.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setSelectedDay } from 'store/selectedDaySlice';
import DiaryButton from './common/DiaryButton';
import DiaryTagButton from './common/DiaryTagButton';

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
          <DiaryTagButton text='텀블러' className='tag1' />
          <DiaryTagButton text='대중교통' className='tag2' />
          <DiaryTagButton text='채식' className='tag3' />
        </div>
      </div>
      <div className={styles.recordContainer}>
        <span>기록</span>
        <img
          src='https://fastly.picsum.photos/id/796/600/600.jpg?hmac=EWz6VhF5lxLNKxRSsH1aVO5c1Y5XTGE6lpqdFXBkKpU'
          className={styles.inputImg}
        />
        <input placeholder='사진' style={{ fontSize: 30 }} type='file' />
        <input placeholder='행동 한마디' />
        <input placeholder='오늘 어떤 행동을 했나요 ?' />
      </div>
      <DiaryButton text='등록하기' />
    </div>
  );
}
