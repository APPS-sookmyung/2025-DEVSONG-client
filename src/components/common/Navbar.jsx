import {NavLink, useLocation} from 'react-router-dom';
import Icon from '../icon/Icon';
import {menuItems} from '.';

const Navbar = () => {
  const currentPath = useLocation().pathname;

  return (
    <div className='md:hidden'>
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
