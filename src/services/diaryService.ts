import { TFormData, CheckboxesState } from 'types/types';
import axios from 'axios';

type THandleEachValue = <T extends keyof TFormData>(
  element: T,
  value: TFormData[T],
  setFormData: React.Dispatch<React.SetStateAction<TFormData>>
) => void;

type THandleSharedClick = (
  eachKeyElement: keyof TFormData,
  value: boolean,
  setFormData: React.Dispatch<React.SetStateAction<TFormData>>
) => void;

type THandleImageChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setSelectedImage: React.Dispatch<React.SetStateAction<string | undefined>>,
  setFormData: React.Dispatch<React.SetStateAction<TFormData>>
) => void;

type THandleCheckboxChange = (
  checkboxName: keyof CheckboxesState,
  checkboxes: CheckboxesState,
  setCheckboxes: React.Dispatch<React.SetStateAction<CheckboxesState>>
) => void;

type THandleDiarySubmit = (formData: any, selectedValue: string) => void;

export const HandleEachValue: THandleEachValue = (element, value, setFormData) => {
  setFormData((prevFormData) => ({
    ...prevFormData,
    [element]: value,
  }));
};

export const HandleSharedClick: THandleSharedClick = (eachKeyElement, value, setFormData) => {
  HandleEachValue(eachKeyElement, value, setFormData);
};

export const HandleImageChange: THandleImageChange = (event, setSelectedImage, setFormData) => {
  const file = event.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      const imageDataURL = reader.result as string;
      setSelectedImage(imageDataURL);
    };
    reader.readAsDataURL(file);
    HandleEachValue('file', file, setFormData);
  }
};

export const HandleCheckboxChange: THandleCheckboxChange = (checkboxName, checkboxes, setCheckboxes) => {
  setCheckboxes({
    ...checkboxes,
    [checkboxName]: !checkboxes[checkboxName],
  });
};

// FIX:
export const HandleDiarySubmit: THandleDiarySubmit = (formData, selectedValue) => {
  const { tag, file, title, content, shareStatus } = formData;

  if (tag == false || title === '' || file == null || content === '') {
    alert('모든 값을 입력하셔야합니다!');
  } else {
    const tagMapping: Record<string, string> = {
      tag1: '텀블러',
      tag2: '대중교통',
      tag3: '장바구니',
    };

    const transformedTags: string[] = tag.map((data: any) => tagMapping[data]);

    const postFormData = new FormData();
    transformedTags.forEach((value: string, index: number) => {
      postFormData.append(`tag[${index}]`, value);
    });
    postFormData.append('imageUrl', file);
    postFormData.append('title', title);
    postFormData.append('content', content);
    postFormData.append('shareStatus', shareStatus.toString());

    axios
      .post(`https://www.eco-earf.com/api/diary/${selectedValue}`, postFormData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.error('에러 발생:', error);
      });
  }
};

export const HandleDiaryEditSubmit: THandleDiarySubmit = (formData, selectedValue) => {
  const { tag, file, title, content, shareStatus } = formData;

  if (tag == false || title === '' || content === '') {
    alert('모든 값을 입력하셔야합니다!');
  } else {
    const tagMapping: Record<string, string> = {
      tag1: '텀블러',
      tag2: '대중교통',
      tag3: '장바구니',
    };

    const transformedTags: string[] = tag.map((data: any) => tagMapping[data]);

    const postFormData = new FormData();
    transformedTags.forEach((value: string, index: number) => {
      postFormData.append(`tag[${index}]`, value);
    });
    postFormData.append('title', title);
    postFormData.append('content', content);
    postFormData.append('shareStatus', shareStatus.toString());

    axios
      .patch(`https://www.eco-earf.com/api/diary/${selectedValue}`, postFormData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.error('에러 발생:', error);
      });
  }
};
