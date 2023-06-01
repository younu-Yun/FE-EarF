import styles from './QuestionPostingContents.module.scss';

function QuestionPostingContents() {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.title}>제목이 이만큼 길어지면 어떨까</p>
        <p className={styles.content}>내용은 이만큼 길어지면 어떨까</p>
      </div>
    </div>
  );
}

export default QuestionPostingContents;
