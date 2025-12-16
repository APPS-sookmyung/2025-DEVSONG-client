import {useState} from 'react';
import commentIcon from '../../assets/icons/comment.svg';
import heartIcon from '../../assets/icons/heart.svg';
import Button from '../common/Button';
import Applicants from './Applicants';
import {applyToPost} from '@apis/posts';

const PostActions = ({
  postId,
  isAuthor,
  applied,
  liked,
  likeCount,
  comment,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onCheckApplicantsClick = () => {
    setIsOpen(!isOpen);
  };

  const [isApplied, setIsApplied] = useState(applied);

  const onApplyClick = async () => {
    if (isApplied) return; // 이미 지원했다면 중복 클릭 방지

    // if (!window.confirm('이 프로젝트에 지원하시겠습니까?')) return;

    try {
      await applyToPost(postId);
      setIsApplied(true); // 상태를 지원 완료로 변경
    } catch (error) {
      console.error('지원하기 실패:', error);
    }
  };

  return (
    <div className='flex items-center justify-between mt-4 md:mt-5 pb-3 md:pb-5 border-b-1 border-black-60'>
      <div className='flex text-sm gap-3 md:text-base'>
        <span className='flex items-center'>
          <img src={heartIcon} className='w-7 h-7' alt='좋아요 수' />
          {likeCount}
        </span>
        <span className='flex items-center'>
          <img src={commentIcon} className='w-7 h-7' alt='댓글 수' />
          {comment}
        </span>
      </div>
      <div className='relative'>
        {isAuthor ? (
          <Button variant='primary' onClick={onCheckApplicantsClick}>
            지원자 확인
          </Button>
        ) : (
          <Button variant='primary' onClick={onApplyClick}>
            {isApplied ? '지원완료' : '지원하기'}
          </Button>
        )}
        {isAuthor && isOpen && <Applicants postId={postId} />}
      </div>
    </div>
  );
};

export default PostActions;
