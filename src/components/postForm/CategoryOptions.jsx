import {CATEGORIES} from '../constants/categories';
import Option from './Option';

const CategoryOptions = ({selectedCategory, onCategorySelect, disabled}) => {
  return (
    <ul
      className={`flex text-center justify-center md:justify-start gap-3 md:gap-6 ${
        disabled ? 'pointer-events-none opacity-70' : ''
      }`}>
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
