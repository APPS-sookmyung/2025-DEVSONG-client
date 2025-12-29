import verticalEllipsis from '../../assets/icons/verticalEllipsisIcon.svg';
import back from '../../assets/icons/back_grey.svg';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import ModalLayout from '@components/common/ModalLayout';
import {closeApply} from '@apis/posts';

const PostHeaderActions = ({isAuthor, postId, handlePostUpdate}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const optionItems = ['수정', '마감'];

  const handleClose = async () => {
    try {
      const response = await closeApply(Number(postId));

      console.log(response.data);
    } catch (error) {
      console.error('포스트 마감 처리 실패', error);
    }
  };

  return (
    <div
      className={`hidden md:pb-5 md:flex md:justify-between *:md:bg-grey-01 *:rounded-sm *:cursor-pointet`}>
      <div
        onClick={() => navigate('/posts')}
        className='flex-center w-7 h-7 px-[5.5px] py-[10.5px] cursor-pointer'>
        <img src={back} alt='뒤로가기' />
      </div>
      <div className='relative'>
        <img
          className={`w-7 h-7 p-0.5 cursor-pointer ${
            !isAuthor ? 'md:hidden' : ''
          }`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
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
    </div>
  );
};

export default PostHeaderActions;
