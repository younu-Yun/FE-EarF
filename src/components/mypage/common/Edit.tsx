import styles from './Edit.module.scss';
import { useState, ChangeEvent } from 'react';
import { ReactComponent as UserIcon } from 'assets/icons/UserIcon.svg';
import Button from 'components/common/Button';
import camera from 'assets/images/camera.png';
import { useNavigate } from 'react-router-dom';
// import { userInfoChange } from 'api/Fetcher';

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
}

function Edit() {
  const [formData, setFormData] = useState<FormValues>({
    name: '불러온 이름',
    email: 'abc@def.com',
    phoneNumber: '010-1234-5678',
  });

  const [profileImage, setProfileImage] = useState<File | null>(null);

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
    }
  };

  const useNavigateToInfo = () => {
    const navigate = useNavigate();
    navigate('/mypage/info');
  };

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   const { name, email, phoneNumber } = formData;
  //   try {
  //     await userInfoChange(name, email, phoneNumber);
  //   } catch (error) {
  //     console.error('유저 정보 변경 실패', error);
  //   }
  // };

  return (
    <div className={styles.edit}>
      <form>
        <div className={styles.profileImageBox}>
          {/* 프로필 이미지로 교체 */}
          <UserIcon />
          <label htmlFor='profileImage' className={styles.camera}>
            <img src={camera} alt='카메라'></img>
          </label>
          <input
            type='file'
            id='profileImage'
            name='profileImage'
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </div>
        <div className={styles.userInfo}>
          <label htmlFor='name'>아이디</label>
          <input type='text' id='name' name='name' value={formData.name} />
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
          <Button text={'완료'} />
          {/* onClick={handleSubmit} */}
          <Button text={'취소'} className={'whiteButton'} onClick={useNavigateToInfo} />
        </div>
      </form>
    </div>
  );
}

export default Edit;
