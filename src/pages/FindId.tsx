import styles from './FindId.module.scss';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { userFindId } from 'api/fetcher';

import FormHead from 'components/User/FormHead';
import FormButton from 'components/User/FormButton';
import { DefaultInput } from 'components/User/DefaultInput';
import { validateField } from 'components/User/validation';
import DefaultModal from '../components/common/DefaultModal';

import FindIDIllust from '../assets/images/FindIDIllust.png';
import AlertCircle from '../assets/icons/AlertCircle.svg';

interface FormData {
  name: string;
  email: string;
}

const FindId: React.FC = () => {
  const [foundId, setFoundId] = useState('');
  const [idFoundWarning, setIdFoundWarning] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  });

  const [validation, setValidation] = useState<{ [key: string]: boolean }>({
    name: false,
    email: false,
  });

  const [formValid, setFormValid] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  useEffect(() => {
    const newValidation = {
      name: validateField('name', formData.name, formData),
      email: validateField('email', formData.email, formData),
    };

    setValidation(newValidation);
  }, [formData]);

  useEffect(() => {
    const isFormValid = Object.values(validation).every((isValid) => isValid);
    setFormValid(isFormValid);
  }, [validation]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const { email, name } = formData;
      const data: any = await userFindId(email, name);

      const foundUser = data;

      if (foundUser) {
        setFoundId(foundUser.id);
        setIdFoundWarning(false);
        setShowModal(true);
      } else {
        setIdFoundWarning(true);
        setShowModal(false);
      }
    } catch (error) {
      console.log('API 요청 중 에러 발생:', error);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <div></div>
          <div></div>
        </div>
        <div>
          <div className={styles.imageBox}>
            <div className={styles.image}>
              <img src={FindIDIllust} alt='아이디찾기 일러스트' />
            </div>
          </div>
          <div className={styles.infoBox}>
            <div></div>
            <div className={styles.form}>
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <legend>아이디찾기</legend>
                  <FormHead
                    heading={'아이디 찾기'}
                    description={'아이디를 잊으셨나요? 이메일과 이름을 입력해주세요.'}
                  />
                  <div>
                    <DefaultInput
                      label='이름'
                      type='text'
                      id='name'
                      value={formData.name}
                      error={!validation.name && formData.name.length > 0}
                      errorMessage='이름은 2자 이상이어야 합니다.'
                      onChange={handleInputChange}
                    />
                    <DefaultInput
                      label='이메일'
                      type='text'
                      id='email'
                      value={formData.email}
                      error={!validation.email && formData.email.length > 0}
                      errorMessage='유효한 이메일 주소를 입력해주세요.'
                      onChange={handleInputChange}
                    />

                    {idFoundWarning && <div className={styles.warning}>일치하는 아이디가 없습니다.</div>}
                  </div>
                </fieldset>
                <FormButton>
                  <button type='submit' disabled={!formValid}>
                    아이디 찾기
                  </button>
                </FormButton>
              </form>
            </div>
            <div className={styles.formBottom}>
              <p>Copyright ⓒ 2023 - 2023 EarF Inc. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <DefaultModal
          title='아이디찾기'
          content={
            <>
              <span>
                <img src={AlertCircle} alt='안내' /> 회원님의 정보와 일치하는 아이디입니다.
              </span>
              <p>{foundId}</p>
            </>
          }
          button={
            <>
              <Link to='/login'>로그인</Link>
              <Link to='/find_password'>비밀번호 찾기</Link>
            </>
          }
          onClose={() => setShowModal(false)}
          showModal={showModal}
        />
      )}
    </>
  );
};

export default FindId;
