import React, { useRef, useState, useEffect } from 'react';
import styles from './styles.module.scss';
import inputDefaultImg from '../../assets/images/inputDefaultImg.png';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setSelectedDay } from 'store/selectedDaySlice';
import DiaryButton from './common/DiaryButton';
import DiaryTagButton from './common/DiaryTagButton';
import ShareButton from './common/ShareButton';
import CheckboxComponent from './common/CheckboxComponent';
import { TFormData, CheckboxesState } from 'types/types';
import { handleDiarySubmit } from 'services/calenderService';

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
    tag: [],
    file: null,
    title: '',
    content: '',
    shareStatus: false,
  });

  const handleSharedClick = () => {
    HandleEachValue('shareStatus', !formData.shareStatus);
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

  const [checkboxes, setCheckboxes] = useState<CheckboxesState>({
    tag1: false,
    tag2: false,
    tag3: false,
  });

  useEffect(() => {
    HandleEachValue('tag', getSelectedCheckboxes());
  }, [checkboxes]);

  console.log(checkboxes.tag1, 'checkbox');

  const getSelectedCheckboxes = (): string[] => {
    return Object.keys(checkboxes).filter((checkbox) => checkboxes[checkbox]);
  };
  // console.log(getSelectedCheckboxes(), 'checkout value');

  const handleCheckboxChange = (checkboxName: string) => {
    setCheckboxes({
      ...checkboxes,
      [checkboxName]: !checkboxes[checkboxName],
    });
  };

  console.log(selectedValue, 'in diary state');
  return (
    <div className={styles.container}>
      <div className={styles.tagContainer}>
        <span>태그</span>
        <div>
          <CheckboxComponent
            label='텀블러'
            isChecked={checkboxes.tag1}
            onChange={() => handleCheckboxChange('tag1')}
            tag='tag1'
          />
          <CheckboxComponent
            label='대중교통'
            isChecked={checkboxes.tag2}
            onChange={() => handleCheckboxChange('tag2')}
            tag='tag2'
          />
          <CheckboxComponent
            label='채식'
            isChecked={checkboxes.tag3}
            onChange={() => handleCheckboxChange('tag3')}
            tag='tag3'
          />
        </div>
      </div>
      <div className={styles.recordContainer}>
        <span>기록</span>
        <div className={styles.recondWrapper}>
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
              HandleEachValue('title', event.target.value);
            }}
            value={formData.title}
          />
          <textarea
            placeholder='오늘 어떤 행동을 했나요 ?'
            className={styles.inputContent}
            rows={5}
            onChange={(event) => {
              HandleEachValue('content', event.target.value);
            }}
          />
          <ShareButton toggle={formData.shareStatus} onClick={handleSharedClick} />
          <DiaryButton text='등록하기' onClick={handleDiarySubmit} />
        </div>
      </div>
    </div>
  );
}
