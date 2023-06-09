import styles from './Edit.module.scss';
import { useState, ChangeEvent, useEffect } from 'react';
import { ReactComponent as UserIcon } from 'assets/icons/UserIcon.svg';
import Button from 'components/common/Button';
import camera from 'assets/images/camera.png';
import { useNavigate } from 'react-router-dom';
import { userInfo } from 'api/Fetcher';
import { userInfoChange } from 'api/Fetcher';

interface FormValues {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  profileImage: File | null;
}

function Edit() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [formData, setFormData] = useState<FormValues>({
    id: '',
    name: '',
    email: '',
    phoneNumber: '',
    profileImage: null,
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response: FormValues = await userInfo();
        const { name, email, phoneNumber, profileImage, id } = response;
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
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
      setFormData((prevData) => ({
        ...prevData,
        profileImage: file,
      }));
    }
  };

  const useNavigateToInfo = () => {
    navigate('/mypage/info');
  };

  const handleUserInfoChange = async () => {
    try {
      const { name, email, phoneNumber } = formData;
      await userInfoChange(name, email, phoneNumber);
      navigate('/mypage/info');
    } catch (error) {
      console.error('수정에 실패했습니다.', error);
    }
  };

  return (
    <div className={styles.edit}>
      <form>
        <div className={styles.profileImageBox}>
          <UserIcon />
          <label htmlFor='profileImage' className={styles.camera}>
            <img src={camera} alt='카메라'></img>
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
        <div className={styles.userInfo}>
          <label htmlFor='name'>아이디</label>
          <input type='text' id='name' name='name' value={formData.id} readOnly />
        </div>
        <div className={styles.userInfo}>
          <label htmlFor='name'>이름</label>
          <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} />
        </div>
        <div className={styles.userInfo}>
          <label htmlFor='email'>이메일</label>
          <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} />
        </div>
        <div className={styles.userInfo}>
          <label htmlFor='phoneNumber'>전화번호</label>
          <input type='tel' id='phoneNumber' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <div className={styles.buttonContainer}>
          <Button text={'완료'} onClick={handleUserInfoChange} />
          <Button text={'취소'} className={'whiteButton'} onClick={useNavigateToInfo} />
        </div>
      </form>
    </div>
  );
}

export default Edit;
