import React from 'react';
import search from '../../assets/icons/searchIcon.svg';

const SearchBar = () => {
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <div className='w-82 flex gap-3 bg-white px-3 py-2 rounded-[8px]'>
        <img src={search} alt='검색창' />
        <input
          className='w-full text-black-40 font-medium text-sm focus:outline-none'
          type='text'
          placeholder='무엇이든 검색해보세요'
        />
      </div>
    </form>
  );
};

export default SearchBar;
