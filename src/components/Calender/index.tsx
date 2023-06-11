import Diary from 'components/Diary';
import DiaryContainer from 'components/Diary/DiaryContainer';
import dayjs from 'dayjs';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { setSelectedDay } from 'store/selectedDaySlice';
import './styles.scss';

type ValuePiece = Date | null;

export default function Calender() {
  // const [value, onChange] = useState<ValuePiece | [ValuePiece, ValuePiece]>(new Date());

  // console.log(value, 'value');

  const mark = ['2023-06-02', '2023-06-05', '2023-06-10'];

  // TODO: 이 부분 api로 현재 선택된 날짜 (selectedValue) 통해서 데이터 있는지 확인(api로)하고 있으면 true 없으면 false 로 수정
  const [isDataInDay, setIsDataInDay] = useState(false);

  const dispatch = useDispatch();
  const selectedValue = useSelector((state: RootState) => state.selectedDay.value);

  const handleDateChange = (date: any) => {
    dispatch(setSelectedDay(dayjs(date?.toString()).format('YYYY MM DD')));
  };
  const handleActiveStartDateChange = (date: any) => {
    handleDateChange(dayjs(date?.toString()).format('YYYY MM DD'));
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
          onActiveStartDateChange={({ activeStartDate }) => handleActiveStartDateChange(activeStartDate)}
          formatDay={(locale, date) => dayjs(date).format('DD')}
          tileContent={({ date }) => {
            const foundMark = mark.find((x) => x === dayjs(date).format('YYYY-MM-DD'));
            if (foundMark !== undefined && foundMark !== null) {
              // TODO: api 돌려서 만약에 태그가 3개면 dot3 className이 되도록 설정
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
      {isDataInDay ? <Diary /> : <DiaryContainer />}
    </div>
  );
}
