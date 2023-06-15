import styles from './Edit.module.scss';
import { useState, ChangeEvent, useEffect } from 'react';
import Button from 'components/common/Button';
import plus from 'assets/images/plus.png';
import { useNavigate } from 'react-router-dom';
import { userInfo, userInfoChange, userImgChange, userImgDelete } from 'api/fetcher';
interface FormValues {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  profileImage: string;
}

function Edit() {
  const navigate = useNavigate();
  const imgFormData = new FormData();
  const [previewImage, setPreviewImage] = useState<string>('');
  const [imageData, setImageData] = useState<File | undefined>();

  const [formData, setFormData] = useState<FormValues>({
    id: '',
    name: '',
    email: '',
    phoneNumber: '',
    profileImage: '',
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { id, name, email, phoneNumber, profileImage }: FormValues = (await userInfo()) as FormValues;
        const userData = {
          id,
          name,
          email,
          phoneNumber,
          profileImage,
        };
        setFormData(userData);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };
    fetchUserInfo();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    if (file) {
      imgFormData.append('profileImage', file);
      const reader = new FileReader();

      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setPreviewImage(imageUrl);
      };
      reader.readAsDataURL(file);
      setImageData(file);
    }
  };

  const useNavigateToChangePassword = (): void => {
    navigate('/change_password');
  };

  const handleUserInfoChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const { id, name, email, phoneNumber } = formData;
      await userInfoChange(id, name, email, phoneNumber);
      if (imageData) {
        imgFormData.append('profileImage', imageData);
        await userImgChange(imgFormData);
      }
      navigate('/mypage/info');
    } catch (error) {
      console.error('수정에 실패했습니다.', error);
    }
  };

  const handleDefaultImgChange = async () => {
    await userImgDelete();
    setPreviewImage('');
  };

  return (
    <div className={styles.edit}>
      <form>
        <div className={styles.profileImageBox}>
          <img src={previewImage ? previewImage : formData.profileImage} alt='프로필' />
          <label htmlFor='profileImage' className={styles.camera}>
            <img src={plus} alt='카메라'></img>
          </label>
          <input
            type='file'
            id='profileImage'
            name='profileImage'
            accept='image/*'
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </div>
        <button className={styles.defaultImgButton} onClick={handleDefaultImgChange}>
          기본 이미지로 변경
        </button>
        <div className={`${styles.userInfo} ${styles.readOnly}`}>
          <label htmlFor='id'>아이디</label>
          <input type='text' id='id' name='id' value={formData.id} readOnly />
        </div>
        <div className={`${styles.userInfo} ${styles.readOnly}`}>
          <label htmlFor='email'>이메일</label>
          <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} readOnly />
        </div>
        <div className={styles.userInfo}>
          <label htmlFor='name'>이름</label>
          <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} />
        </div>
        <div className={styles.userInfo}>
          <label htmlFor='phoneNumber'>전화번호</label>
          <input type='tel' id='phoneNumber' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <div className={styles.buttonContainer}>
          <Button text={'완료'} onClick={handleUserInfoChange} />
          <Button text={'비밀번호 변경하기'} className={'whiteButton'} onClick={useNavigateToChangePassword} />
        </div>
      </form>
    </div>
  );
}

export default Edit;
