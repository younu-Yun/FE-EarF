import styles from './styles.module.scss';

function DiaryButton(props: { text: string; className?: string; onClick: () => void }) {
  const buttonClass = props.className ? `${styles.button} ${styles[props.className]}` : styles.button;

  return (
    <button className={buttonClass} onClick={props.onClick} type='submit'>
      {props.text}
    </button>
  );
}

export default DiaryButton;
