import {NavLink, useLocation} from 'react-router-dom';
import Icon from '../icon/Icon';

const navItems = [
  {
    path: '/',
    label: '홈',
    alt: '홈',
    icon_id: 'nav_home',
    active_id: 'nav_home_active',
  },
  {
    path: '/post',
    label: '게시판',
    alt: '게시판',
    icon_id: 'nav_post',
    active_id: 'nav_post_active',
  },
  {
    path: '/chat',
    label: '채팅',
    alt: '채팅',
    icon_id: 'nav_chat',
    active_id: 'nav_chat_active',
  },
  {
    path: '/profile',
    label: '이력서',
    alt: '이력서',
    icon_id: 'nav_profile',
    active_id: 'nav_profile_active',
  },
  {
    path: '/my',
    label: '마이페이지',
    alt: '마이페이지',
    icon_id: 'nav_my',
    active_id: 'nav_my_active',
  },
];

const Navbar = () => {
  const currentPath = useLocation().pathname;

  return (
    <div className='sm:hidden'>
      <ul className='width-full flex flex-nowrap justify-around pb-8 pt-3'>
        {navItems.map(
          ({
            path,
            label,
            icon_id,
            active_id,
            isActive = path === currentPath,
          }) => (
            <NavLink key={path} to={path}>
              <li className='flex flex-col items-center gap-1'>
                <Icon id={isActive ? active_id : icon_id} />
                <span
                  className={`text-[8px] ${
                    isActive ? 'text-[#5C5AEE]' : 'text-[#A3A3A4]'
                  }`}>
                  {label}
                </span>
              </li>
            </NavLink>
          )
        )}
      </ul>
    </div>
  );
};

export default Navbar;
