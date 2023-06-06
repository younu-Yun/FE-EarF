import styles from './DefaultInput.module.scss';
import React, { ChangeEvent } from 'react';

interface InputProps {
  type: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface DefaultInputProps {
  inputProps: InputProps;
  label: string;
  showWarning?: boolean;
  warning?: string;
}

const DefaultInput: React.FC<DefaultInputProps> = ({ inputProps, label, showWarning = false, warning }) => {
  const { type, id, value, onChange } = inputProps;

  return (
    <div className={styles.formElement}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
      {showWarning && value.length === 0 && <div className={styles.warning}>{warning}</div>}
    </div>
  );
};

export { DefaultInput };
