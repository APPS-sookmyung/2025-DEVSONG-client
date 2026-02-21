import CommentThread from './CommentThread';
import comment from '@assets/icons/comment_grey.svg';

const CommentSection = ({isAuthor, comments, activeCommentId, onToggle}) => {
  const noComment = !comments || comments.length === 0;

  if (noComment) {
    return (
      <div className='flex items-center justify-center flex-col md:h-50 gap-5 mt-20 md:mt-10'>
        <img className='w-22 h-22' src={comment} alt='댓글' />
        <p className='text-lg text-black-60 font-medium'>
          첫 댓글을 남겨주세요.
        </p>
      </div>
    );
  }

  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <CommentThread
            key={comment.commentId}
            isAuthor={isAuthor}
            index={index}
            isActive={activeCommentId === comment.commentId}
            onToggle={() => onToggle(comment.commentId)}
            replies={comment.children || []}
            {...comment}
          />
        );
      })}
    </div>
  );
};

export default CommentSection;
