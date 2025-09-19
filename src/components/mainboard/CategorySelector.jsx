import React from 'react';
import {Link} from 'react-router-dom';
import {CATEGORIES} from '../constants/categories';

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
