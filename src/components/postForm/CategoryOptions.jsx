import {useState} from 'react';
import {CATEGORIES} from '../constants/categories';

const base = `cursor-pointer bg-white whitespace-nowrap 
rounded-3xl shadow-box font-semibold text-black-60 hover:bg-main hover:text-white`;
const mobile = 'w-15 text-xs leading-4 px-2 py-1';
const responsive = `md:w-20.5 md:text-base md:leading-5 md:px-3 md:py-2 
lg:w-26 lg:text-lg lg:leading-6`;

const CategoryOptions = () => {
  return (
    <ul className='flex text-center justify-center md:justify-start gap-3 md:gap-6'>
      {CATEGORIES.slice(1).map((category) => (
        <li key={category.label} className={`${base} ${mobile} ${responsive}`}>
          {category.label}
        </li>
      ))}
    </ul>
  );
};

export default CategoryOptions;
