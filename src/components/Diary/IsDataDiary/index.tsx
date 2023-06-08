import React, { useState } from 'react';
import styles from './styles.module.scss';

const data = {
  tag: ['텀블러', '대중교통'],
  imageUrl: 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200',
  title: '오늘의 지구 지키기',
  content: '오늘은 카페에서 일회용품대신 텀블러로 주문을 했다, 기분이 좋았다.',
  shareStatus: true,
};

export default function IsDataDiary() {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(data.title);
  const [editedContent, setEditedContent] = useState(data.content);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setEditedTitle(editedTitle);
    setEditedContent(editedContent);
    console.log(editedTitle);
    console.log(editedContent);
  };

  const combinedTags = data.tag.join(', ');

  return (
    <div className={styles.container}>
      <div className={styles.postContainer}>
        <div className={styles.postItemWrapper}>
          <div className={styles.tagImg}>.</div>
          <span>{combinedTags}</span>
        </div>
        <img src={data.imageUrl} className={styles.imgContainer} />
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
    </div>
  );
}
