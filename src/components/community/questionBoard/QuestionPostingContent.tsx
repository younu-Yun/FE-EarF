import styles from './QuestionPostingContent.module.scss';

function QuestionPostingContent(props: { content: string }) {
  const contentText = `${props.content.split('.').slice(0, 2).join('. ')} ...`;

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.title}>제목이 이만큼 길어지면 어떨까</p>
        <p className={styles.content}>{contentText}</p>
      </div>
    </div>
  );
}

export default QuestionPostingContent;
