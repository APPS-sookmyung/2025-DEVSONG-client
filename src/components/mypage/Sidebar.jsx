import React from 'react';

import my from '../../assets/icons/my_profile.png';
import editIcon from '../../assets/icons/my_write.png';
import commentIcon from '../../assets/icons/comment.svg';
import likedIcon from '../../assets/icons/heart.svg';
import appliedIcon from '../../assets/icons/my_applied.png';
import nextArrow from '../../assets/icons/nextArrow.svg';

import myActive from '../../assets/icons/my_white.png';
import editIconActive from '../../assets/icons/editIcon.svg';
import commentIconActive from '../../assets/icons/comment.svg';
import likedIconActive from '../../assets/icons/heart.svg';
import appliedIconActive from '../../assets/icons/my_applied_active.png';

const Sidebar = ({activeTab, setActiveTab}) => {
  const menus = [
    {
      id: 'edit',
      label: '프로필 수정',
      icon: my,
      activeIcon: myActive,
    },
    {
      id: 'written',
      label: '내가 쓴 글',
      icon: editIcon,
      activeIcon: editIconActive,
    },
    {
      id: 'comments',
      label: '댓글 단 글',
      icon: commentIcon,
      activeIcon: commentIconActive,
    },
    {
      id: 'liked',
      label: '좋아요한 글',
      icon: likedIcon,
      activeIcon: likedIconActive,
    },
    {
      id: 'applied',
      label: '지원한 글',
      icon: appliedIcon,
      activeIcon: appliedIconActive,
    },
  ];

  return (
    <div className='w-[280px] min-w-[280px] flex-shrink-0 h-fit bg-white rounded-[20px] p-[30px] shadow-box flex flex-col items-center'>
      <div className='w-20 h-20 bg-[#4cd918] rounded-full mb-4'></div>
      <h2 className='text-xl font-bold text-black-100 mb-1'>김눈송</h2>
      <div className='text-sm text-black text-center mb-8 leading-relaxed'>
        24학번
        <br />
        데이터사이언스전공
      </div>

      <nav className='w-full flex flex-col gap-2.5'>
        {menus.map((menu) => (
          <button
            key={menu.id}
            onClick={() => setActiveTab(menu.id)}
            className={`
              w-full flex justify-between items-center px-5 py-3 rounded-xl transition-colors duration-200
              ${
                activeTab === menu.id
                  ? 'bg-main text-white'
                  : 'bg-grey-01 text-black hover:bg-grey-02'
              }
            `}>
            <div className='flex items-center gap-3 text-sm'>
              <img
                src={activeTab === menu.id ? menu.activeIcon : menu.icon}
                alt={menu.label}
                className='w-5 h-5'
              />
              <span>{menu.label}</span>
            </div>

            <img
              src={nextArrow}
              alt='arrow'
              className={`w-5 h-5 pl-43${
                activeTab === menu.id ? 'brightness-0 invert' : ''
              }`}
            />
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
