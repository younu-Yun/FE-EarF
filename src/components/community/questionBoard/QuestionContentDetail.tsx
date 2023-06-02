import styles from './QuestionContentDetail.module.scss';

function QuestionContentDetail(props: { content: string }) {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.title}>제목이 이만큼 길어지면 어떨까</p>
        <p className={styles.content}>{props.content}</p>
      </div>
    </div>
  );
}

export default QuestionContentDetail;
