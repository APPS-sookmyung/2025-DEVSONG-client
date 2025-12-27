import SearchBar from '../components/common/SearchBar';
import PostList from '../components/mainboard/PostList';
import CategorySelector from '../components/mainboard/CategorySelector';
import SortSelector from '../components/mainboard/SortSelector';
import RecruitmentStatusFilter from '../components/mainboard/RecruitmentStatusFilter';
import Pagination from '../components/githubRanking/Pagination';
import {getPosts} from '@apis/posts';
import {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import Button from '@components/common/Button';
import WriteButton from '@components/mainboard/WriteButton';

const DEFAULT_CATEGORY = 'all';

const MainBoard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || DEFAULT_CATEGORY;

  const handleCategoryChange = (next) => {
    if (!next || next === DEFAULT_CATEGORY) {
      setSearchParams({}, {replace: true});
    } else {
      setSearchParams({category: next}, {replace: true});
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await getPosts(
        category === DEFAULT_CATEGORY ? null : category
      );
      setPosts(response.data.posts);
    } catch (error) {
      console.error('게시글 목록 불러오기 실패:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [category]);

  return (
    <main className='relative flex flex-col items-center gap-2'>
      <div className='absolute z-[-1] w-full h-62 md:h-91 lg:h-121 bg-linear-[154deg,#a4b8ff_0%,#a8d4ff_56.76%,#d9f6ff_86.78%] rounded-b-4xl' />

      <section>
        <SearchBar />
        <CategorySelector
          handleCategoryChange={handleCategoryChange}
          currentCategory={category}
        />
      </section>

      <section className='flex items-center gap-3 md:gap-7 mb-4 w-86 md:mb-6 lg:mb-8 md:w-149 lg:w-212'>
        <SortSelector />
        <RecruitmentStatusFilter />
        <WriteButton />
      </section>

      <PostList posts={posts} />
      <Pagination currentPage={1} totalPages={1} setCurrentPage={() => {}} />
    </main>
  );
};

export default MainBoard;
