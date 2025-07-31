import React from 'react';

const Category = [
  {id: 1, title: '프로젝트'},
  {id: 2, title: '스터디'},
  {id: 3, title: '정보'},
  {id: 4, title: '대외활동'},
  {id: 5, title: '자유'},
];

const CategorySelector = ({filters, setFilters}) => {
  // const onClickCategory = (category_name) => {
  //   setFilters({...filters, category: category_name});
  // };

  return (
    <div>
      <ul className='text-sm text-black-100 font-semibold flex justify-evenly items-center py-2 my-2'>
        {Category.map((item) => {
          return (
            <li
              // onClick={onClickCategory(item.title)}
              className='hover:text-main'
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
