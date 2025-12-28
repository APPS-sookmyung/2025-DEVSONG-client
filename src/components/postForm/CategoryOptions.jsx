import {CATEGORIES} from '../constants/categories';
import Option from './Option';

const CategoryOptions = ({selectedCategory, onCategorySelect}) => {
  return (
    <ul className='flex text-center justify-center md:justify-start gap-3 md:gap-6'>
      {CATEGORIES.slice(1).map((category) => (
        <Option
          key={category.key}
          label={category.label}
          category={category.key}
          selected={selectedCategory}
          onCategorySelect={onCategorySelect}
        />
      ))}
    </ul>
  );
};

export default CategoryOptions;
