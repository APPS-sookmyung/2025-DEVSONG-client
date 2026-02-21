import {useState} from 'react';
import commentIcon from '@assets/icons/comment.svg';
import heartIcon from '@assets/icons/heart.svg';
import fullHeartIcon from '@assets/icons/fullHeart.svg';
import Button from '../common/Button';
import Applicants from './Applicants';
import {applyToPost, likePost} from '@apis/posts';
import useClickOutside from '@hooks/useClickOutside';

const PostActions = ({
  id,
  isAuthor,
  applied,
  liked,
  likeCount,
  comment,
  closed,
  applyCount,
  onLikeToggle,
  handlePostApply,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const applicantsRef = useClickOutside(() => setIsOpen(false));
  const [isLiking, setIsLiking] = useState(false);

  const onLikeClick = async () => {
    if (isLiking) return;
    setIsLiking(true);

    const nextLiked = !liked;
    const nextCount = Math.max(0, likeCount + (nextLiked ? 1 : -1));

    onLikeToggle(nextLiked, nextCount);

    try {
      await likePost(id);
    } catch (error) {
      console.error('좋아요 처리 실패:', error);
      onLikeToggle(liked, likeCount);
    } finally {
      setIsLiking(false);
    }
  };

  const onCheckApplicantsClick = () => {
    setIsOpen(!isOpen);
  };

  const onApplyClick = async () => {
    if (!window.confirm('이 프로젝트에 지원하시겠습니까?')) return;

    try {
      await applyToPost(id);
      handlePostApply();
    } catch (error) {
      console.error('지원하기 실패:', error);
    }
  };

  return (
    <div className='flex items-center justify-between mt-4 md:mt-5 pb-3 md:pb-5 border-b border-black-60'>
      <div className='flex text-sm gap-3 md:text-base'>
        <span
          className='flex items-center cursor-pointer'
          onClick={onLikeClick}>
          <img
            src={liked ? fullHeartIcon : heartIcon}
            className='w-7 h-7'
            alt='like'
          />
          {likeCount}
        </span>
        <span className='flex items-center cursor-pointer'>
          <img src={commentIcon} className='w-7 h-7' alt='댓글 수' />
          {comment}
        </span>
      </div>
      <div ref={applicantsRef} className='relative'>
        {isAuthor ? (
          <Button
            variant='primary'
            disabled={applyCount === 0}
            onClick={onCheckApplicantsClick}>
            지원자 확인 ({applyCount})
          </Button>
        ) : (
          <Button
            variant='primary'
            disabled={applied || closed}
            className={`${applied ? 'bg-main/70' : ''}`}
            onClick={onApplyClick}>
            {applied ? '지원완료' : '지원하기'}
          </Button>
        )}
        {isAuthor && isOpen && <Applicants postId={id} />}
      </div>
    </div>
  );
};

export default PostActions;
