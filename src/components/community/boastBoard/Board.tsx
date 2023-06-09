import SelectBox from './SelectBox';
import BoastSwiper from './BoastSwiper';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Board.module.scss';

function Board() {
  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <SelectBox />
      </div>
      <div className={styles.BoastItemsContainer}>
        <BoastSwiper />
      </div>
    </div>
  );
}

export default Board;
