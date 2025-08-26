import verticalEllipsis from '../../assets/icons/verticalEllipsisIcon.svg';
import back from '../../assets/icons/back_grey.svg';
import {useNavigate} from 'react-router-dom';

const PostHeaderActions = ({isAuthor}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`hidden md:pb-5 md:flex md:justify-between *:md:bg-grey-01 *:rounded-sm *:cursor-pointet`}>
      <div
        onClick={() => navigate(-1)}
        className='flex-center w-7 h-7 px-[5.5px] py-[10.5px] cursor-pointer'>
        <img src={back} alt='뒤로가기' />
      </div>
      <div>
        <img
          className={`w-7 h-7 p-0.5 cursor-pointer ${
            !isAuthor ? 'md:hidden' : ''
          }`}
          src={verticalEllipsis}
          alt='메뉴'
        />
      </div>
    </div>
  );
};

export default PostHeaderActions;
