import {Link} from 'react-router-dom';
import back from '../../assets/icons/back.svg';

const PostFormLayout = ({children, onClick, isUpdate}) => {
  return (
    <>
      <header className='bg-white flex items-center justify-between p-6 md:hidden *:cursor-pointer'>
        <Link to={-1}>
          <img src={back} alt='뒤로가기' />
        </Link>
        <span className='text-main text-sm font-semibold' onClick={onClick}>
          {isUpdate ? '수정' : '등록'}
        </span>
      </header>
      {children}
    </>
  );
};

export default PostFormLayout;
