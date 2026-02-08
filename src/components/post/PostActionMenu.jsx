import {useState} from 'react';
import verticalEllipsis from '../../assets/icons/verticalEllipsisIcon.svg';
import ModalLayout from '@components/common/ModalLayout';
import {closeApply} from '@apis/posts';

const PostActionMenu = ({isAuthor, postId, handlePostUpdate, className}) => {
  const [isOpen, setIsOpen] = useState(false);
  const optionItems = ['수정', '마감'];

  const handleClose = async () => {
    try {
      await closeApply(Number(postId));
    } catch (error) {
      console.error('포스트 마감 처리 실패', error);
    }
  };

  if (!isAuthor) return null;

  return (
    <div className={`relative ${className || ''}`}>
      <img
        className='w-6 h-6 md:w-7 md:h-7 p-0.5 cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
        src={verticalEllipsis}
        alt='메뉴'
      />
      {isOpen && (
        <div className='absolute whitespace-nowrap z-10 -top-1 right-0'>
          <ModalLayout width={'w-17 md:w-20 lg:w-24'}>
            {optionItems.map((option, index) => (
              <div
                key={index}
                onClick={option === '마감' ? handleClose : handlePostUpdate}
                className='text-xs md:text-sm lg:text-base font-medium text-black-100 lg:pl-1.5'>
                {option}
              </div>
            ))}
          </ModalLayout>
        </div>
      )}
    </div>
  );
};

export default PostActionMenu;
