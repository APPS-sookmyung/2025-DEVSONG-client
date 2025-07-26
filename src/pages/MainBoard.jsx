import SearchBar from '../components/common/SearchBar';
import PostList from '../components/mainboard/PostList';

const MainBoard = () => {
  return (
    <div className='flex flex-col items-center gap-2 my-5'>
      <SearchBar />
      <PostList />
    </div>
  );
};

export default MainBoard;
