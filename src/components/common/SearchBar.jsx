import React from 'react';
import search from '../../assets/icons/searchIcon.svg';

const SearchBar = () => {
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <div className='my-5 md:my-8 flex-center bg-white gap-3 rounded-[8px] w-82 md:w-127 md:h-12.5 lg:w-171 lg:h-15 px-3 py-2 lg:px-6 lg:py-3'>
        <img src={search} className='w-6 h-6' alt='검색창' />
        <input
          className='w-full text-black-40 font-medium text-sm md:text-base focus:outline-none'
          type='text'
          placeholder='무엇이든 검색해보세요'
        />
      </div>
    </form>
  );
};

export default SearchBar;
