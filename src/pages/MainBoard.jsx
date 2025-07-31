import SearchBar from '../components/common/SearchBar';
import PostList from '../components/mainboard/PostList';
import CategorySelector from '../components/mainboard/CategorySelector';
import SortSelector from '../components/mainboard/SortSelector';
import RecruitmentStatusFilter from '../components/mainboard/RecruitmentStatusFilter';
import {useState} from 'react';

const MainBoard = () => {
  const [filters, setFilters] = useState({
    category: '전체',
    sort: '최신순',
    status: '전체',
  });
  return (
    <div className='bg-linear-to-b from-[#A4B8FF] from-0% via-[#A8D4FF] via-20% to-[#D9F6FF] to-50% flex flex-col items-center gap-2 py-5'>
      <div>
        <SearchBar filters={filters} setFilters={setFilters} />
        <CategorySelector filters={filters} setFilters={setFilters} />
        <div className='flex items-center gap-3 mt-5'>
          <SortSelector />
          <RecruitmentStatusFilter />
        </div>
      </div>
      <PostList />
    </div>
  );
};

export default MainBoard;
