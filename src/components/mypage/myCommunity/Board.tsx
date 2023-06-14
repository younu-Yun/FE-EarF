import { useGetMyQuestionQuery } from 'api/communityApiSlice';
import errorCommunity from 'assets/images/errorCommunity.png';
import QuestionPostingItem from 'components/community/questionBoard/QuestionPostingItem';
import { PuffLoader } from 'react-spinners';
import { ReactComponent as Top } from 'assets/icons/ArrowUp.svg';
import styles from 'components/community/questionBoard/Board.module.scss';

export default function Board() {
  const { data: postData, isLoading: isLoading, error: postError } = useGetMyQuestionQuery();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loadingContainer}>
          <PuffLoader color='#24AE63' loading size={100} />
        </div>
      ) : postError ? (
        <div className={styles.errorContainer}>
          <img src={errorCommunity} />
          게시글을 불러오지 못했습니다.
        </div>
      ) : (
        <ul>
          {postData &&
            postData?.map((post) => (
              <QuestionPostingItem
                key={post._id}
                _id={post._id}
                title={post.title}
                content={post.content}
                createdAt={post.createdAt}
                id={post.id}
                name={post.name}
                profileImage={post.profileImage}
                numComments={post.commentIds.length}
                numLikes={post.likeIds.length}
              />
            ))}
        </ul>
      )}
      <div className={styles.scrollContainer}>
        <button onClick={scrollToTop} type='button'>
          <Top />
        </button>
      </div>
    </div>
  );
}
