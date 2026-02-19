import SearchBar from '@components/common/SearchBar';
import PostList from '@components/mainboard/PostList';
import CategorySelector from '@components/mainboard/CategorySelector';
import SortSelector from '@components/mainboard/SortSelector';
import RecruitmentStatusFilter from '@components/mainboard/RecruitmentStatusFilter';
import Pagination from '@components/githubRanking/Pagination';
import {getPosts} from '@apis/posts';
import {useEffect, useState, useCallback} from 'react';
import {useSearchParams} from 'react-router-dom';
import WriteButton from '@components/mainboard/WriteButton';

const DEFAULT_CATEGORY = 'all';
const DEFAULT_SORT_TYPE = 'createdAt';

const MainBoard = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageInfo, setPageInfo] = useState({currentPage: 1, totalPages: 1});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const category = searchParams.get('category') || DEFAULT_CATEGORY;
  const sortBy = searchParams.get('sortBy') || DEFAULT_SORT_TYPE;
  const closed = searchParams.get('closed');
  const page = Number(searchParams.get('page') || 1);

  const updateParams = (updates) => {
    const params = Object.fromEntries([...searchParams]);
    Object.entries(updates).forEach(([key, value]) => {
      if (value === undefined) delete params[key];
      else params[key] = value;
    });
    setSearchParams(params, {replace: true});
  };

  // 카테고리 변경 핸들러
  const handleCategoryChange = (next) => {
    const category = !next || next === DEFAULT_CATEGORY ? undefined : next;
    updateParams({category, page: 1});
  };

  // 모집 상태 변경 핸들러
  const handleRecruitmentStatusChange = (status) => {
    const closed =
      status === 'ALL' ? undefined : status === 'OPEN' ? 'false' : 'true';
    updateParams({closed, page: 1});
  };

  // 정렬 방식 변경 핸들러
  const handleSortChange = (sortType) => {
    updateParams({sortBy: sortType, page: 1});
  };

  // 페이지 변경 핸들러
  const handlePageChange = (page) => {
    updateParams({page});
  };

  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
    setError(null);

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
      setError('게시글을 불러오지 못했습니다.');
    } finally {
      setIsLoading(false);
    }
  }, [category, page, sortBy, closed]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

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

      {isLoading && <p className='py-10 text-black-40'>로딩 중...</p>}
      {error && (
        <p className='py-20 md:py-10 text-sm md:text-lg text-shadow-red-300'>
          {error}
        </p>
      )}
      {!isLoading && !error && posts.length === 0 && (
        <p className='py-20 md:py-10 text-sm md:text-lg text-black-40 '>
          게시글이 없습니다.
        </p>
      )}
      {!isLoading && !error && posts.length > 0 && (
        <>
          <PostList posts={posts} />
          <Pagination
            currentPage={pageInfo.currentPage}
            totalPages={pageInfo.totalPages}
            setCurrentPage={handlePageChange}
          />
        </>
      )}
    </main>
  );
};

export default MainBoard;
