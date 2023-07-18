import dayjs from 'dayjs';

import { useSelector } from 'react-redux';
import { RootState } from 'store';

import tagImg1 from 'assets/icons/tagimg1.svg';
import tagImg2 from 'assets/icons/tagimg2.svg';
import tagImg3 from 'assets/icons/tagimg3.svg';

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
