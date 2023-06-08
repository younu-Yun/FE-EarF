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
import {
  handleDiarySubmit,
  HandleEachValue,
  HandleSharedClick,
  HandleImageChange,
  HandleCheckboxChange,
} from 'services/calenderService';

export default function Diary() {
  const selectedValue = useSelector((state: RootState) => state.selectedDay.value);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(inputDefaultImg);
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  const [formData, setFormData] = useState<TFormData>({
    tag: [],
    file: null,
    title: '',
    content: '',
    shareStatus: false,
  });

  const [checkboxes, setCheckboxes] = useState<CheckboxesState>({
    tag1: false,
    tag2: false,
    tag3: false,
  });

  useEffect(() => {
    HandleEachValue('tag', getSelectedCheckboxes(), setFormData);
  }, [checkboxes]);

  // console.log(checkboxes.tag1, 'checkbox');

  const getSelectedCheckboxes = (): string[] => {
    return Object.keys(checkboxes).filter((checkbox) => {
      console.log(typeof checkbox, 'checkout');
      checkboxes[checkbox];
    });
  };

  const handleImageClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleDiarySubmit = () => {
    console.log('Form Data:', formData);
  };

  // console.log(getSelectedCheckboxes(), 'checkout value');

  console.log(selectedValue, 'in diary state');
  return (
    <div className={styles.container}>
      <div className={styles.tagContainer}>
        <span>태그</span>
        <div>
          <CheckboxComponent
            label='텀블러'
            isChecked={checkboxes.tag1}
            onChange={() => HandleCheckboxChange('tag1', checkboxes, setCheckboxes)}
            tag='tag1'
          />
          <CheckboxComponent
            label='대중교통'
            isChecked={checkboxes.tag2}
            onChange={() => HandleCheckboxChange('tag2', checkboxes, setCheckboxes)}
            tag='tag2'
          />
          <CheckboxComponent
            label='채식'
            isChecked={checkboxes.tag3}
            onChange={() => HandleCheckboxChange('tag3', checkboxes, setCheckboxes)}
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
            onChange={(event) => HandleImageChange(event, setSelectedImage, setFormData)}
          />

          <input
            placeholder='행동 한마디'
            className={styles.inputContent}
            onChange={(event) => {
              HandleEachValue('title', event.target.value, setFormData);
            }}
            value={formData.title}
          />
          <textarea
            placeholder='오늘 어떤 행동을 했나요 ?'
            className={styles.inputContent}
            rows={5}
            onChange={(event) => {
              HandleEachValue('content', event.target.value, setFormData);
            }}
          />
          <ShareButton
            toggle={formData.shareStatus}
            onClick={() => HandleSharedClick('shareStatus', !formData.shareStatus, setFormData)}
          />
          <DiaryButton text='등록하기' onClick={handleDiarySubmit} />
        </div>
      </div>
    </div>
  );
}
