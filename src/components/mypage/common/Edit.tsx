import styles from './Edit.module.scss';
import { useState, ChangeEvent } from 'react';
import { ReactComponent as UserIcon } from 'assets/icons/UserIcon.svg';
interface FormValues {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

function Edit() {
  const [formData, setFormData] = useState<FormValues>({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

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
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 서버로 데이터 전송
    // formData 객체를 서버로 보낼 수 있도록 구현
    // 전송 후 성공/실패 처리 로직 추가
  };
  return (
    <div className={styles.edit}>
      <form onSubmit={handleSubmit}>
        <div className={styles.profileImage}>
          {previewImage && (
            <div>
              <img src={previewImage} alt='프로필 사진 미리보기' style={{ maxWidth: '100px', maxHeight: '100px' }} />
            </div>
          )}
          <label htmlFor='profileImage' style={{ display: previewImage ? 'none' : 'block' }}>
            <UserIcon />
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
          <input type='text' id='name' name='name' value={'아이디는 고정값'} />
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
          <label htmlFor='password'>비밀번호</label>
          <input type='password' id='password' name='password' value={formData.password} onChange={handleChange} />
        </div>
        <div className={styles.userInfo}>
          <label htmlFor='phoneNumber'>전화번호</label>
          <input type='tel' id='phoneNumber' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}> 수정하기 </button>
          <button className={styles.button}> 회원탈퇴 </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
