import { ReactComponent as Edit } from 'assets/icons/PostEdit.svg';
import { ReactComponent as Delete } from 'assets/icons/Delete.svg';
import styles from './PostEditButton.module.scss';

function PostEditButton() {
  return (
    <div className={styles.container}>
      <Edit />
      <Delete />
    </div>
  );
}

export default PostEditButton;
