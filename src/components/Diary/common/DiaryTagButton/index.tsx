import styles from './styles.module.scss';

function DiaryTagButton(props: { text: string; className: string }) {
  const buttonClass = `${styles.button} ${styles[props.className]}`;
  return (
    <div className={styles.container}>
      <button className={buttonClass} />
      <span>{props.text}</span>
    </div>
  );
}

export default DiaryTagButton;
