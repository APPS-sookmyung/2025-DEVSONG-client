import React from 'react';

const Category = [
  {id: 0, title: '전체'},
  {id: 1, title: '프로젝트'},
  {id: 2, title: '스터디'},
  {id: 3, title: '정보'},
  {id: 4, title: '대외활동'},
  {id: 5, title: '자유'},
];

const CategorySelector = () => {
  return (
    <div>
      <ul className='mb-10 md:mb-15 lg:mb-20 flex justify-evenly items-center text-sm md:text-base lg:text-lg text-black-100 font-semibold'>
        {Category.map((item) => {
          return (
            <li
              className='cursor-pointer lg:pb-[5px] lg:px-[2.5px] lg:border-b-2 lg:border-transparent lg:hover:text-main lg:hover:border-main'
              key={item.id}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategorySelector;
