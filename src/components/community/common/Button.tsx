import styles from './Button.module.scss';

function Button(props: { text: string; className?: string }) {
  const buttonClass = props.className ? `${styles.button} ${styles[props.className]}` : styles.button;

  return <button className={buttonClass}>{props.text}</button>;
}

export default Button;
