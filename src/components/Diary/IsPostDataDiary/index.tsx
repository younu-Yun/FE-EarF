import { useEffect, useState } from 'react';

import { GetSelectedDateState } from 'services/calendarService';

import { getApiCalendarEachData, deleteApiCalendarData } from 'services/calendarApiService';
import { EachDayDataApiType } from 'types/types';

import tumblr from 'assets/icons/badge04.svg';
import bus from 'assets/icons/badge05.svg';
import shoppingbag from 'assets/icons/badge06.svg';
import { PuffLoader } from 'react-spinners';

import EditedDiary from '../EditDiary';

import styles from './styles.module.scss';

export default function IsPostDataDiary() {
  const [data, setData] = useState<EachDayDataApiType>();
  const [isEdited, setIsEdited] = useState(false);
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

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <PuffLoader color='#24AE63' loading size={100} />
      </div>
    );
  }

  return (
    <>
      {!isEdited ? (
        <div className={styles.container}>
          <div className={styles.postContainer}>
            <div className={styles.postItemWrapper}>
              {data?.tag.map((item, index) => {
                if (item == '텀블러') {
                  return <img src={tumblr} key={index} alt='tumblr' className={styles.tagImg} />;
                }
                if (item == '대중교통') {
                  return <img src={bus} key={index} alt='tumblr' className={styles.tagImg} />;
                }
                if (item == '장바구니') {
                  return <img src={shoppingbag} key={index} alt='tumblr' className={styles.tagImg} />;
                }
              })}
            </div>
            <div className={styles.imgContainer}>
              <img alt='postimg' src={data?.imageUrl} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.postTitleDiv}>
                <h3>{data?.title}</h3>
              </div>
              <div className={styles.postContentDiv}>
                <p>{data?.content}</p>{' '}
              </div>
              {data?.shareStatus ? <div className={styles.boastDiv}>자랑하기</div> : <></>}
            </div>
          </div>
          <div className={styles.buttonBox}>
            <button className={styles.modifyButton} onClick={() => setIsEdited(!isEdited)}>
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
