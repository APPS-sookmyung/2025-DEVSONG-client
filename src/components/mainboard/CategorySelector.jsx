import {CATEGORIES} from '../constants/categories';

const CategorySelector = ({handleCategoryChange, currentCategory = 'all'}) => {
  return (
    <div>
      <ul className='mb-10 md:mb-15 lg:mb-20 flex justify-evenly items-center text-sm md:text-base lg:text-lg text-black-100 font-semibold'>
        {CATEGORIES.map((category) => {
          const isSelected = currentCategory === category.key;
          return (
            <li
              className={`cursor-pointer lg:pb-[5px] lg:px-1 lg:border-b-2 lg:hover:text-main ${
                isSelected ? 'text-main border-main' : 'lg:border-transparent'
              }`}
              onClick={() => handleCategoryChange(category.key)}
              key={category.key}>
              {category.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategorySelector;
