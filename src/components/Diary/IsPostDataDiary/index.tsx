import { useEffect, useState } from 'react';

import { GetSelectedDateState } from 'services/calendarService';

import { getApiCalendarEachData, deleteApiCalendarData } from 'services/calendarApiService';
import { GetTagImage } from 'services/calendarService';
import { EachDayDataApiType } from 'types/types';

import { ReactComponent as LoadingImg } from 'assets/icons/LoadingImg2.svg';
import EditedDiary from '../EditDiary';

import styles from './styles.module.scss';

export default function IsPostDataDiary() {
  const [data, setData] = useState<EachDayDataApiType>();
  const [isEdited, setIsEdited] = useState(false);
  const [loading, setLoading] = useState(true);

  const tagImageSrc = GetTagImage(data?.tag.length);
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

  if (loading) {
    return <LoadingImg />;
  }

  return (
    <>
      {!isEdited ? (
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
          <div style={{ display: 'flex' }}>
            <button className={styles.deleteButton} onClick={() => setIsEdited(!isEdited)}>
              수정
            </button>
            <button className={styles.deleteButton} onClick={() => deleteApiCalendarData(selectedValue)}>
              삭제
            </button>
          </div>
        </div>
      ) : (
        <EditedDiary data={data} currentState={isEdited} onClick={setIsEdited} />
      )}
    </>
  );
}
