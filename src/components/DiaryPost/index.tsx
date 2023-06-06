import React, { useRef, useState } from 'react';
import styles from './styles.module.scss';
import inputDefaultImg from '../../assets/images/inputDefaultImg.png';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setSelectedDay } from 'store/selectedDaySlice';
import DiaryButton from './common/DiaryButton';
import DiaryTagButton from './common/DiaryTagButton';
import ShareButton from './common/ShareButton';

type TFormData = {
  file: File | null;
  inputTitle: string;
  inputMain: string;
  sharedValue: boolean;
};

export default function Diary() {
  const selectedValue = useSelector((state: RootState) => state.selectedDay.value);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(inputDefaultImg);
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  const HandleEachValue = (element: keyof TFormData, value: any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [element]: value,
    }));
  };

  const [formData, setFormData] = useState<TFormData>({
    file: null,
    inputTitle: '',
    inputMain: '',
    sharedValue: false,
  });

  const handleSharedClick = () => {
    HandleEachValue('sharedValue', !formData.sharedValue);
    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   sharedValue: !formData.sharedValue,
    // }));
  };

  const handleImageClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataURL = reader.result as string;
        setSelectedImage(imageDataURL);
      };
      reader.readAsDataURL(file);
      HandleEachValue('file', file);
    }
  };

  const handleDiarySubmit = () => {
    console.log('Form Data:', formData);
  };

  console.log(selectedValue, 'in diary state');
  return (
    <div className={styles.container}>
      <div className={styles.tagContainer}>
        <span>태그</span>
        <div>
          <DiaryTagButton text='텀블러' className='tag1' />
          <DiaryTagButton text='대중교통' className='tag2' />
          <DiaryTagButton text='채식' className='tag3' />
        </div>
      </div>
      <div className={styles.recordContainer}>
        <span>기록</span>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <img src={selectedImage} className={styles.defaultImg} onClick={handleImageClick} />
          <input
            placeholder='사진'
            type='file'
            className={styles.inputImg}
            ref={hiddenFileInput}
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />

          <input
            placeholder='행동 한마디'
            className={styles.inputContent}
            onChange={(event) => {
              HandleEachValue('inputTitle', event.target.value);
            }}
            value={formData.inputTitle}
          />
          <textarea
            placeholder='오늘 어떤 행동을 했나요 ?'
            className={styles.inputContent}
            rows={5}
            onChange={(event) => {
              HandleEachValue('inputMain', event.target.value);
            }}
          />
          <ShareButton toggle={formData.sharedValue} onClick={handleSharedClick} />
          <DiaryButton text='등록하기' onClick={handleDiarySubmit} />
        </div>
      </div>
    </div>
  );
}
