import { useState } from 'react';
import { ReactComponent as Heart } from 'assets/icons/Heart.svg';
import styles from '../questionBoard/QuestionUserReaction.module.scss';

function HeartReaction() {
  const [likeIt, setLikeIt] = useState(false);
  const [likeItNumber, setLikeItNumber] = useState(0);

  const handleLikeIt = () => {
    setLikeIt((prevLikeIt) => !prevLikeIt);
    setLikeItNumber((prevNumber) => (likeIt ? prevNumber - 1 : prevNumber + 1));
  };

  return (
    <div className={styles.reactionContainer} onClick={handleLikeIt}>
      <Heart />
      <span className={styles.reactionNumber}>{likeItNumber}</span>
    </div>
  );
}

export default HeartReaction;
