import styles from './styles.module.scss';

import sharebtn from 'assets/images/sharebtn.png';
import sharedbtn from 'assets/images/sharedbtn.png';

export default function ShareButton(props: { toggle: boolean; onClick: () => void }) {
  return (
    <button className={styles.shareButton} onClick={props.onClick}>
      <img src={props.toggle ? sharedbtn : sharebtn} alt='Like Button' />
      <span>자랑하기</span>
    </button>
  );
}
