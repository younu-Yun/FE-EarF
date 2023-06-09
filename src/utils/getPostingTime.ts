import dayjs from 'dayjs';
import 'dayjs/locale/ko';

const getPostingTime = (date: string): string => {
  const dataDate = dayjs(date).locale('ko');
  const currentDate = dayjs();
  const diff = currentDate.diff(dataDate, 'minute');

  if (diff < 1) {
    return '방금 전';
  } else if (diff < 60) {
    return `${diff}분 전`;
  } else if (diff < 1440) {
    return `${Math.floor(diff / 60)}시간 전`;
  } else if (diff < 10080) {
    return `${Math.floor(diff / 1440)}일 전`;
  } else {
    return dataDate.format('YYYY.MM.DD HH:mm');
  }
};

export default getPostingTime;
