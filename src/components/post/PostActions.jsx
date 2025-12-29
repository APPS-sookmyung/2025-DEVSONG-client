import {useState} from 'react';
import commentIcon from '@assets/icons/comment.svg';
import heartIcon from '@assets/icons/heart.svg';
import fullHeartIcon from '@assets/icons/fullHeart.svg';
import Button from '../common/Button';
import Applicants from './Applicants';
import {applyToPost, likePost} from '@apis/posts';
import ApplyModal from './applyModal';

const PostActions = ({
  postId,
  isAuthor,
  applied,
  liked,
  likeCount,
  comment,
  onLikeToggle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const onLikeClick = async () => {
    const nextLiked = !liked;
    const nextCount = Math.max(0, likeCount + (nextLiked ? 1 : -1));

    onLikeToggle(nextLiked, nextCount);

    try {
      await likePost(postId);
    } catch (error) {
      console.error('좋아요 처리 실패:', error);
      onLikeToggle(liked, likeCount);
    }
  };

  const onCheckApplicantsClick = () => {
    setIsOpen(!isOpen);
  };

  const [isApplied, setIsApplied] = useState(applied);

  const onApplyClick = async () => {
    if (isApplied) return;

    // if (!window.confirm('이 프로젝트에 지원하시겠습니까?')) return;

    try {
      await applyToPost(postId);
      setIsApplied(true);
    } catch (error) {
      console.error('지원하기 실패:', error);
    }
  };

  return (
    <div className='flex items-center justify-between mt-4 md:mt-5 pb-3 md:pb-5 border-b border-black-60'>
      <div className='flex text-sm gap-3 md:text-base'>
        <span className='flex items-center' onClick={onLikeClick}>
          <img
            src={liked ? fullHeartIcon : heartIcon}
            className='w-7 h-7'
            alt='like'
          />
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
          <Button
            variant='primary'
            className={`${isApplied ? 'bg-main/70' : ''}`}
            onClick={() => {
              setIsApplyOpen(true);
            }}>
            {isApplied ? '지원완료' : '지원하기'}
          </Button>
        )}
        {isAuthor && isOpen && <Applicants postId={postId} />}
        {isApplyOpen && <ApplyModal />}
      </div>
    </div>
  );
};

export default PostActions;
