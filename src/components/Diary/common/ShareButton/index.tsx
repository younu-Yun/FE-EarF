import styles from './styles.module.scss';

export default function ShareButton(props: { toggle: boolean; onClick: () => void }) {
  return (
    <>
      <label className={styles.shareButton}>
        <input type='checkbox' checked={props.toggle} onChange={props.onClick} className={styles.hiddenCheckbox} />
        <span>자랑하기</span>
      </label>
    </>
  );
}
