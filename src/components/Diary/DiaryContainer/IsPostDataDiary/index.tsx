import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { getApiCalendarEachData } from 'services/calendarApiService';

type EachDayDataApiType = {
  _id: string;
  id: string;
  tag: string[];
  imageUrl: string;
  title: string;
  content: string;
  shareStatus: boolean;
  date: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export default function IsPostDataDiary() {
  const [data, setData] = useState<EachDayDataApiType>();

  useEffect(() => {
    getApiCalendarEachData(selectedValue).then((data: EachDayDataApiType) => {
      setData(data);
      setEditedContent(data?.content);
      setEditedTitle(data?.title);
      setEditedTag(data?.tag.join(', '));
      setLoading(false);
    });
  }, []);

  console.log();

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const [editedTag, setEditedTag] = useState('');
  const [loading, setLoading] = useState(true);

  const selectedValue = useSelector((state: RootState) => state.selectedDay.value);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setEditedTitle(editedTitle);
    setEditedContent(editedContent);
  };

  console.log(editedTag, 'asdfsadfa');

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div className={styles.postContainer}>
        <div className={styles.postItemWrapper}>
          <div className={styles.tagImg}>.</div>
          <span>{editedTag}</span>
        </div>
        <img alt='postimg' src={data?.imageUrl} className={styles.imgContainer} />
        {isEditing ? (
          <div className={styles.inputContainer}>
            <input
              type='text'
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className={styles.inputContent}
            />
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className={styles.inputContent}
            />
          </div>
        ) : (
          <>
            <div className={styles.postItemWrapper}>{editedTitle}</div>
            <div className={styles.postItemWrapper}>{editedContent}</div>
          </>
        )}
      </div>
      <div>
        {isEditing ? <button onClick={handleSaveClick}>완료</button> : <button onClick={handleEditClick}>수정</button>}
        <button>삭제</button>
      </div>
    </>
  );
}
