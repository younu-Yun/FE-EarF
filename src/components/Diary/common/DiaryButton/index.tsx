import styles from './styles.module.scss';
import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'store';

import dayjs from 'dayjs';

function DiaryButton(props: { text: string; className?: string; onClick: () => void }) {
  const buttonClass = props.className ? `${styles.button} ${styles[props.className]}` : styles.button;
  const selectedValue = useSelector((state: RootState) => state.selectedDay.value);
  const selectedDay = dayjs(selectedValue).toDate();
  const [isEnabled, setIsEnabled] = useState(false);

  const currentDate = dayjs().toDate();

  useEffect(() => {
    if (selectedDay > currentDate) {
      alert('오늘 이후 날짜는 미리 설정할 수 없습니다.');
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  }, [selectedValue]);

  return (
    <button disabled={isEnabled} className={buttonClass} onClick={props.onClick} type='submit'>
      {props.text}
    </button>
  );
}

export default DiaryButton;
