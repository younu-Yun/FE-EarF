import { Link } from 'react-router-dom';
import styles from './NewComment.module.scss';

export default function NewComment(props: { _id: string; title: string; comment: string }) {
  const { title, comment, _id } = props;

  return (
    <div className={styles.commentContainer}>
      <Link to={`/community/question/${_id}`}>
        <p>{title}</p>
        <span>: {comment}</span>
      </Link>
    </div>
  );
}
