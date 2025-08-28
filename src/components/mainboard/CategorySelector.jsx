import React from 'react';
import {Link} from 'react-router-dom';

const CATEGORIES = [
  {key: 'all', label: '전체'},
  {key: 'project', label: '프로젝트'},
  {key: 'study', label: '스터디'},
  {key: 'info', label: '정보'},
  {key: 'extra', label: '대외활동'},
  {key: 'free', label: '자유'},
];

const CategorySelector = () => {
  return (
    <div>
      <ul className='mb-10 md:mb-15 lg:mb-20 flex justify-evenly items-center text-sm md:text-base lg:text-lg text-black-100 font-semibold'>
        {CATEGORIES.map((category) => {
          return (
            <li
              className='cursor-pointer lg:pb-[5px] lg:px-[2.5px] lg:border-b-2 lg:border-transparent lg:hover:text-main lg:hover:border-main'
              key={category.key}>
              <Link
                to={
                  category.key !== 'all' ? `/posts/${category.key}` : `/posts`
                }>
                {category.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategorySelector;
