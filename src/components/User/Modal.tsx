import React from 'react';
import styles from './Modal.module.scss';
import Close from '../../assets/icons/Close.svg';

interface ModalProps {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
  showModal: boolean;
  button?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, content, onClose, showModal, button }) => {
  return (
    <div className={`${styles.modal} ${showModal ? styles.show : ''}`}>
      <div className={`${styles.background} ${showModal ? styles.show : ''}`} onClick={onClose}></div>
      <div className={`${styles.modalInner} ${showModal ? styles.show : ''}`} onClick={(e) => e.stopPropagation()}>
        <div>
          <div className={styles.close}>
            <button onClick={onClose}>
              <img src={Close} alt='닫기' />
            </button>
          </div>
          <h3>{title}</h3>
          <div className={styles.contents}>{content}</div>
          <div className={styles.modalButtonBox}>{button}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
