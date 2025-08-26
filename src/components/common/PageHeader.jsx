import verticalEllipsis from '../../assets/icons/verticalEllipsisIcon.svg';
import back from '../../assets/icons/back.svg';
import {useNavigate} from 'react-router-dom';

const PageHeader = () => {
  const navigate = useNavigate();

  return (
    <header className='bg-white w-full h-17.5 px-7 flex items-center justify-between *:cursor-pointer md:hidden'>
      <img onClick={() => navigate(-1)} src={back} alt='뒤로가기' />
      <img src={verticalEllipsis} alt='메뉴' />
    </header>
  );
};

export default PageHeader;
