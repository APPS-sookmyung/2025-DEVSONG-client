import React, {useState} from 'react';
import arrowdown from '../../assets/icons/arrowdownIcon.svg';

const SortSelector = () => {
  const [sortType, setSortType] = useState('최신순');
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <div
        onClick={handleOnClick}
        className='flex w-17 justify-between text-xs p-1.5 bg-white rounded-md'>
        {sortType}
        <img src={arrowdown} alt='자세히 보기' />
      </div>
      {isOpen && (
        <ul className='absolute w-17 text-xs bg-white rounded-md mt-1 border-[0.5px]'>
          <li className='p-1.5 border-b-[0.5px]'>최신순</li>
          <li className='p-1.5'>좋아요순</li>
        </ul>
      )}
    </div>
  );
};

export default SortSelector;
