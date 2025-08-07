import SearchBar from '../components/common/SearchBar';
import PostList from '../components/mainboard/PostList';
import CategorySelector from '../components/mainboard/CategorySelector';
import SortSelector from '../components/mainboard/SortSelector';
import RecruitmentStatusFilter from '../components/mainboard/RecruitmentStatusFilter';
import Pagination from '../components/githubRanking/Pagination';
import {useState} from 'react';

const MainBoard = () => {
  return (
    <div className='relative flex flex-col items-center gap-2'>
      <div className='absolute z-[-1] w-full h-62 md:h-91 lg:h-121 bg-linear-[154deg,#a4b8ff_0%,#a8d4ff_56.76%,#d9f6ff_86.78%] rounded-b-4xl'></div>
      <div>
        <SearchBar />
        <CategorySelector />
      </div>
      <div className='flex justify-start items-center gap-3 md:gap-7 mb-4 w-86 md:mb-6 lg:mb-8 md:w-149 lg:w-198'>
        <SortSelector />
        <RecruitmentStatusFilter />
      </div>
      <PostList />
      <Pagination currentPage={1} totalPages={1} setCurrentPage={() => {}} />
    </div>
  );
};

export default MainBoard;
