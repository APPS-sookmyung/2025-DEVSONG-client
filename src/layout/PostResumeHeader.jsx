import verticalEllipsis from '../assets/icons/vertical_ellipsis.svg';
import back from '../assets/icons/back2.svg';
import {useNavigate} from 'react-router-dom';

const PostResumeHeader = ({onClick}) => {
  const navigate = useNavigate();

  return (
    <header className='bg-white w-full h-16 px-6 flex items-center relative z-50 justify-between shadow-box md:shadow-none *:cursor-pointer md:hidden'>
      <img
        className='w-5 h-5'
        onClick={() => navigate(-1)}
        src={back}
        alt='뒤로가기'
      />
      <img
        onClick={() => onClick()}
        className='w-6 h-6'
        src={verticalEllipsis}
        alt='메뉴'
      />
    </header>
  );
};

export default PostResumeHeader;
