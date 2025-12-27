import {NavLink, useLocation, matchPath} from 'react-router-dom';
import Icon from '../components/icon/Icon';
import {menuItems} from '../components/common';

const Navbar = () => {
  const currentPath = useLocation().pathname;
  const noNavBar = matchPath('/post/:id', currentPath) !== null; // 게시물 페이지인지 확인

  return (
    <div
      className={`w-full fixed bottom-0 md:hidden ${noNavBar ? 'hidden' : ''}`}>
      <ul className='width-full flex flex-nowrap justify-around bg-white pb-8 pt-3'>
        {menuItems.map(
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
                    isActive ? 'text-main' : 'text-black-40'
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
