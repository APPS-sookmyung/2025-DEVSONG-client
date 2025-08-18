import CommentActions from './CommentActions';

const CommentHeader = ({username, createdAt}) => {
  return (
    <div className='flex items-center gap-2 text-black-40 text-xs font-medium'>
      <p>{username}</p>
      <p>{createdAt}</p>
      <CommentActions />
    </div>
  );
};

export default CommentHeader;
