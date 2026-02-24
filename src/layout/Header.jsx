import logo from '../assets/images/logo.svg';
import notification from '../assets/icons/notificationIcon.svg';
import signout from '../assets/icons/signoutIcon.svg';
import Icon from '../components/icon/Icon';
import {menuItems} from '../components/common';
import {useLocation, NavLink, useNavigate} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

const Header = () => {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  const {logout} = useAuth();

  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      logout();
      navigate('/');
    }
  };

  return (
    <header>
      <div className='flex justify-between bg-white px-6 py-4 md:gap-9 lg:gap-12 lg:px-32'>
        <img src={logo} alt='logo' />
        <div className='md:flex md:items-center md:flex-1 md:justify-between'>
          <ul className='text-xs hidden md:flex md:gap-4 lg:gap-8'>
            {menuItems.map(
              ({
                path,
                label,
                icon_id,
                active_id,
                isActive = path === currentPath,
              }) => (
                <NavLink key={path} to={path}>
                  <li className='flex items-center gap-1 whitespace-nowrap'>
                    <Icon id={isActive ? active_id : icon_id} />
                    <span
                      className={`text-xs font-semibold ${
                        isActive ? 'text-main' : 'text-black-40'
                      }`}>
                      {label}
                    </span>
                  </li>
                </NavLink>
              )
            )}
          </ul>
          <ul className='md:flex md:gap-3'>
            <li>
              <img src={notification} alt='알림' />
            </li>
            <li
              onClick={handleLogout}
              className='cursor-pointer hidden md:flex'>
              <img src={signout} alt='로그아웃' />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
