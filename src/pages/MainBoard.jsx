import SearchBar from '../components/common/SearchBar';
import PostList from '../components/mainboard/PostList';
import CategorySelector from '../components/mainboard/CategorySelector';
import SortSelector from '../components/mainboard/SortSelector';
import RecruitmentStatusFilter from '../components/mainboard/RecruitmentStatusFilter';
import {useState} from 'react';

const MainBoard = () => {
  return (
    <div className='relative flex flex-col items-center gap-2'>
      <div>
        <SearchBar />
        <CategorySelector />
      </div>
      <div className='flex justify-start items-center gap-3 md:gap-7 mb-4 w-86 md:mb-6 lg:mb-8 md:w-149 lg:w-198'>
        <SortSelector />
        <RecruitmentStatusFilter />
      </div>
      <PostList />
    </div>
  );
};

export default MainBoard;
