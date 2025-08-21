import Comment from './Comment';
import CommentHeader from './CommentHeader';
import ReplyList from './ReplyList';

const CommentThread = ({
  commentId,
  index,
  username,
  content,
  createdAt,
  replies,
}) => {
  return (
    <div
      className={`border-t-[1px] pt-4 pb-3 md:py-6 ${
        index === 0 ? 'border-black-60' : 'border-black-20'
      }`}>
      <CommentHeader username={username} createdAt={createdAt} />
      <Comment content={content} />
      {replies.length !== 0 && <ReplyList replies={replies} />}
    </div>
  );
};

export default CommentThread;
