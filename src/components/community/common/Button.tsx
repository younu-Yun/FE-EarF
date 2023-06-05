import styles from './Button.module.scss';

function Button(props: { text: string; className?: string; disabled?: boolean }) {
  const buttonClass = props.className ? `${styles.button} ${styles[props.className]}` : styles.button;
  const isDisabled = props.disabled === true;

  return (
    <button className={buttonClass} disabled={isDisabled}>
      {props.text}
    </button>
  );
}

export default Button;
