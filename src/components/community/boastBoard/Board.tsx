import SelectBox from './SelectBox';
import BoastItem from './BoastItem';
import BoastItemUnActive from './BoastItemUnActive';
import styles from './Board.module.scss';

function Board() {
  return (
    <div className={styles.container}>
      <SelectBox />
      <div className={styles.BoastItemsContainer}>
        <BoastItemUnActive />
        <BoastItem />
        <BoastItemUnActive />
      </div>
    </div>
  );
}

export default Board;
