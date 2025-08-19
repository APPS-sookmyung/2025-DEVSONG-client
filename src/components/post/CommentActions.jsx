import {useState} from 'react';
import commentIcon from '../../assets/icons/comment.svg';
import menuIcon from '../../assets/icons/verticalEllipsisIcon.svg';
import ModalLayout from '../common/ModalLayout';
import CommentActionsMenu from './CommentActionsMenu';

const CommentActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='cursor-pointer relative ml-auto flex items-center bg-grey-02 w-16 h-6 px-[6px] py-[2px] rounded-sm md:w-24 md:h-8 md:px-3 md:py-1'>
      <img src={commentIcon} className='w-5 h-5 md:w-6 md:h-6' alt='좋아요' />
      <div className='h-3 border-[0.8px] mx-[6px] md:mx-3'></div>
      <img
        src={menuIcon}
        onClick={handleOnClick}
        className='w-5 h-5 md:w-6 md:h-6'
        alt='메뉴'
      />
      {isOpen && <CommentActionsMenu />}
    </div>
  );
};

export default CommentActions;
