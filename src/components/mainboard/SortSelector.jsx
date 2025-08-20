import React, {useState} from 'react';
import arrowdown from '../../assets/icons/arrowdownIcon.svg';
import SortOptions from './SortOptions';

const SortSelector = () => {
  const [sortType, setSortType] = useState('최신순');
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative cursor-pointer'>
      <div
        onClick={handleOnClick}
        className='flex-center w-17 md:w-20 lg:w-24 text-xs md:text-sm lg:text-base p-1.5 lg:p-2 bg-white rounded-md gap-1 md:gap-2'>
        {sortType}
        <img src={arrowdown} alt='자세히 보기' />
      </div>
      {isOpen && <SortOptions />}
    </div>
  );
};

export default SortSelector;
