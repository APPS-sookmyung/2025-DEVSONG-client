import CommentThread from './CommentThread';

const CommentSection = ({comments}) => {
  return (
    <>
      {comments.map((comment, index) => {
        return (
          <CommentThread key={comment.commentId} index={index} {...comment} />
        );
      })}
    </>
  );
};

export default CommentSection;
