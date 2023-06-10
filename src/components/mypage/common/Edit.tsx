import styles from './Edit.module.scss';
import { useState, ChangeEvent, useEffect } from 'react';
import Button from 'components/common/Button';
import camera from 'assets/images/camera.png';
import { useNavigate } from 'react-router-dom';
import { userInfo, userInfoChange } from 'api/Fetcher';
import defaultProfile from 'assets/icons/UserIcon.svg';
interface FormValues {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  profileImage: File | string;
}

function Edit() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState<string>('');
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
        const { name, email, phoneNumber, profileImage, id }: FormValues = await userInfo();
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
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProfileImage(reader.result);
        console.log('file', file);
      };
      setFormData((prevData) => ({
        ...prevData,
        profileImage: file,
      }));
    }
  };

  const useNavigateToChangePassword = () => {
    navigate('/change_password');
  };

  const handleUserInfoChange = async (e) => {
    e.preventDefault();
    try {
      const { name, email, phoneNumber, profileImage } = formData;
      await userInfoChange(name, email, phoneNumber, profileImage);
      console.log(name, email, phoneNumber, profileImage);
      console.log(formData);
      // navigate('/mypage/info');
    } catch (error) {
      console.error('수정에 실패했습니다.', error);
    }
  };

  return (
    <div className={styles.edit}>
      <form>
        <div className={styles.profileImageBox}>
          <img src={profileImage ? profileImage : `${defaultProfile}`} alt='프로필' />
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
          <Button text={'비밀번호 변경하기'} className={'whiteButton'} onClick={useNavigateToChangePassword} />
        </div>
      </form>
    </div>
  );
}

export default Edit;
