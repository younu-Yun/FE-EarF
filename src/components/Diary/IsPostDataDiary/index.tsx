import { useEffect, useState } from 'react';

import { GetSelectedDateState } from 'services/calendarService';

import { getApiCalendarEachData, deleteApiCalendarData } from 'services/calendarApiService';
import { GetTagImage } from 'services/calendarService';
import { EachDayDataApiType } from 'types/types';

import styles from './styles.module.scss';

export default function IsPostDataDiary() {
  const [data, setData] = useState<EachDayDataApiType>();
  const [loading, setLoading] = useState(true);

  const selectedValue = GetSelectedDateState();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        await getApiCalendarEachData(selectedValue).then((data: EachDayDataApiType) => {
          setData(data);
          setLoading(false);
        });
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [selectedValue]);

  const tagImageSrc = GetTagImage(data?.tag.length);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.postContainer}>
          <div className={styles.postItemWrapper}>
            <img src={tagImageSrc} alt='tagimg' className={styles.tagImg} />
            <span>{data?.tag.length}개 달성!</span>
          </div>
          <img alt='postimg' src={data?.imageUrl} className={styles.imgContainer} />
          <>
            <div className={styles.postTitleDiv}>{data?.title}</div>

            <div className={styles.postContentDiv}>{data?.content}</div>
          </>
        </div>
        <div>
          <button className={styles.deleteButton} onClick={() => deleteApiCalendarData(selectedValue)}>
            삭제
          </button>
        </div>
      </div>
    </>
  );
}
