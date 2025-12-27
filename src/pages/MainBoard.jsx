import SearchBar from '@components/common/SearchBar';
import PostList from '@components/mainboard/PostList';
import CategorySelector from '@components/mainboard/CategorySelector';
import SortSelector from '@components/mainboard/SortSelector';
import RecruitmentStatusFilter from '@components/mainboard/RecruitmentStatusFilter';
import Pagination from '@components/githubRanking/Pagination';
import {getPosts} from '@apis/posts';
import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import WriteButton from '@components/mainboard/WriteButton';

const DEFAULT_CATEGORY = 'all';
const DEFAULT_SORT_TYPE = 'createdAt';

const MainBoard = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageInfo, setPageInfo] = useState({currentPage: 1, totalPages: 1});
  const category = searchParams.get('category') || DEFAULT_CATEGORY;
  const sortBy = searchParams.get('sortBy') || DEFAULT_SORT_TYPE;
  const page = Number(searchParams.get('page') || 1);

  const handleCategoryChange = (next) => {
    const params = {};

    if (next && next !== DEFAULT_CATEGORY) {
      params.category = next;
      params.page = 1;
    }

    setSearchParams(params, {replace: true});
  };

  const handleSortChange = (sortType) => {
    const params = Object.fromEntries([...searchParams]);
    params.sortBy = sortType;
    params.page = 1;
    setSearchParams(params, {replace: true});
  };

  const handlePageChange = (page) => {
    const params = Object.fromEntries([...searchParams]);
    params.page = page;
    setSearchParams(params, {replace: true});
  };

  const fetchPosts = async () => {
    try {
      const response = await getPosts(
        category === DEFAULT_CATEGORY ? null : category,
        page,
        sortBy,
        closed
      );

      setPageInfo({
        currentPage: response.data.currentPage + 1,
        totalPages: response.data.totalPages,
      });

      setPosts(response.data.posts);
    } catch (error) {
      console.error('게시글 목록 불러오기 실패:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [category, page]);

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
        <SortSelector handleSortChange={handleSortChange} />
        <RecruitmentStatusFilter
          handleRecruitmentStatusChange={handleRecruitmentStatusChange}
        />
        <WriteButton />
      </section>

      <PostList posts={posts} />
      <Pagination
        currentPage={pageInfo.currentPage}
        totalPages={pageInfo.totalPages}
        setCurrentPage={handlePageChange}
      />
    </main>
  );
};

export default MainBoard;
