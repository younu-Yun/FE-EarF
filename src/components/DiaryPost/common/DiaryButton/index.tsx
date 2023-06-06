import styles from './styles.module.scss';

function DiaryButton(props: { text: string; className?: string }) {
  const buttonClass = props.className ? `${styles.button} ${styles[props.className]}` : styles.button;

  return <button className={buttonClass}>{props.text}</button>;
}

export default DiaryButton;
