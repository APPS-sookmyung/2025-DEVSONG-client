import logo from '../../assets/images/logo.svg';
import board from '../../assets/icons/boardIcon.svg';
import chat from '../../assets/icons/chatIcon.svg';
import my from '../../assets/icons/myIcon.svg';
import notification from '../../assets/icons/notificationIcon.svg';
import profile from '../../assets/icons/profileIcon.svg';
import signout from '../../assets/icons/signoutIcon.svg';
import HeaderItem from './HeaderItem';

const Header = () => {
  return (
    <header className='flex w-100% bg-white items-center px-32 py-4 gap-12'>
      <img src={logo} alt='logo' />
      <nav className='flex flex-1 justify-between'>
        <ul className='flex gap-8 text-xs'>
          <HeaderItem icon={board} label='게시판' />
          <HeaderItem icon={chat} label='메세지' />
          <HeaderItem icon={profile} label='이력서' />
          <HeaderItem icon={my} label='마이페이지' />
        </ul>
        <ul className='flex gap-3'>
          <HeaderItem icon={notification} />
          <HeaderItem icon={signout} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
