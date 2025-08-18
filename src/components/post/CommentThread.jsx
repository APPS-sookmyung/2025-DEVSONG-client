import Comment from './Comment';
import CommentHeader from './CommentHeader';
import ReplyList from './ReplyList';

const CommentThread = ({commentId, index, username, content, createdAt}) => {
  return (
    <div
      className={`border-t-[1px] py-4 md:py-6 ${
        index === 0 ? 'border-black-60' : 'border-black-20'
      }`}>
      <CommentHeader username={username} createdAt={createdAt} />
      <Comment content={content} />
      <ReplyList />
    </div>
  );
};

export default CommentThread;
