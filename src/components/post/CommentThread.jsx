import Comment from './Comment';
import ReplyList from './ReplyList';
import commentIcon from '../../assets/icons/comment_grey.svg';
import menuIcon from '../../assets/icons/verticalEllipsisIcon.svg';
import {useState} from 'react';
import ModalLayout from '@components/common/ModalLayout';
import {formatDate} from '../../lib/formateDate';

function CommentHeader({isAuthor, username, createdAt, handleSetClicked}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  console.log(isAuthor);

  return (
    <>
      <div className='flex items-center gap-2 text-black-40 text-xs font-medium'>
        <p className={`${isAuthor === true ? 'text-main' : 'text-black-40'}`}>
          {username}
        </p>
        <p>{formatDate(createdAt)}</p>
        <div className='cursor-pointer relative ml-auto flex items-center bg-grey-02 w-16 h-6 px-1.5 py-0.5 rounded-sm md:w-24 md:h-8 md:px-3 md:py-1'>
          <img
            src={commentIcon}
            className='w-5 h-5 md:w-6 md:h-6'
            alt='답글'
            onClick={handleSetClicked}
          />
          <div className='h-3 border-[0.8px] mx-1.5 md:mx-3'></div>
          <img
            src={menuIcon}
            onClick={handleOnClick}
            className='w-5 h-5 md:w-6 md:h-6'
            alt='메뉴'
          />

          {/* commentActionsMenu */}
          {isOpen && (
            <ModalLayout width={'w-16 md:w-24'}>
              <div className='text-sm md:text-base font-semibold leading-[26.5px] text-black-100'>
                {'삭제'}
              </div>
            </ModalLayout>
          )}
        </div>
      </div>
    </>
  );
}

const CommentThread = ({
  commentId,
  isAuthor,
  index,
  isActive,
  onToggle,
  username,
  content,
  createdAt,
  parentId,
  replies,
}) => {
  const handleClick = (e) => {
    onToggle();
  };

  return (
    <div className={`${index !== 0 ? 'border-t border-black-20' : ''} pt-3`}>
      <div
        onClick={handleClick}
        className={`${
          isActive ? 'bg-main/6 rounded-xl -mx-2.25 px-2.25' : ''
        } pt-4 pb-3 md:py-4 mb-1.5`}>
        <CommentHeader
          isAuthor={isAuthor}
          username={username}
          createdAt={createdAt}
          handleSetClicked={handleClick}
        />
        <Comment content={content} />
      </div>
      {replies.length !== 0 && <ReplyList replies={replies} />}
    </div>
  );
};

export default CommentThread;
