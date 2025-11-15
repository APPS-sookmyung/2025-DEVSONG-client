import {useState} from 'react';
import commentIcon from '../../assets/icons/comment.svg';
import heartIcon from '../../assets/icons/heart.svg';
import Button from '../common/Button';
import Applicants from './Applicants';

const PostActions = ({isAuthor, like, comment}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

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
      <div className='relative'>
        {isAuthor ? (
          <Button variant='primary' onClick={onClick}>
            지원자 확인
          </Button>
        ) : (
          <Button variant='primary' onClick={onClick}>
            지원하기
          </Button>
        )}
        {isOpen && <Applicants />}
      </div>
    </div>
  );
};

export default PostActions;
