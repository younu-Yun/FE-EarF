import dayjs from 'dayjs';

import { useSelector } from 'react-redux';
import { RootState } from 'store';

import tagImg1 from 'assets/images/tagimg1.png';
import tagImg2 from 'assets/images/tagimg2.png';
import tagImg3 from 'assets/images/tagimg3.png';

export const GetTagImage = (tagLength: number | undefined) => {
  if (tagLength === 1) {
    return tagImg1;
  } else if (tagLength === 2) {
    return tagImg2;
  } else if (tagLength === 3) {
    return tagImg3;
  }
  return tagImg1;
};

export const GetFormatDate = (date: Date) => {
  return dayjs(date?.toString()).format('YYYY MM DD');
};

export const GetSelectedDateState = () => {
  return useSelector((state: RootState) => state.selectedDay.value);
};
