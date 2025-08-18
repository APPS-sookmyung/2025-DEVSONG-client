import commentIcon from '../../assets/icons/comment.svg';
import heartIcon from '../../assets/icons/heart.svg';
import Button from '../common/Button';

const PostActions = ({isAuthor, like, comment}) => {
  return (
    <div className='flex items-center justify-between mt-4 mb-3 md:my-5'>
      <div className='flex text-sm gap-3 md:text-base'>
        <span className='flex items-center'>
          <img src={heartIcon} className='w-7 h-7' alt='좋아요 수' />
          {like}
        </span>
        <span className='flex items-center'>
          <img src={commentIcon} className='w-7 h-7' alt='댓글 수' />
          {comment}
        </span>
      </div>
      {isAuthor ? (
        <Button label={'지원자 확인'} />
      ) : (
        <Button label={'지원하기'} />
      )}
    </div>
  );
};

export default PostActions;
