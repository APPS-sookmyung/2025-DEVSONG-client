import React from 'react';
import leftArrow from '../../assets/icons/leftArrow.svg';
import rightArrow from '../../assets/icons/rightArrow.svg';
import mainLeftArrow from '../../assets/icons/mainLeftArrow.svg';
import mainRightArrow from '../../assets/icons/mainRightArrow.svg';
import RecruitLabel from '../common/RecruitLabel';
import CategoryLabel from '../common/CategoryLabel';

const PopularPosts = ({
  posts,
  startIndex,
  handlePrev,
  handleNext,
  isMobile,
}) => {
  return (
    <section className='w-full max-w-5xl px-4 mt-6'>
      <h2 className='font-bold text-lg mb-4'>현재 인기 글</h2>

      {isMobile ? (
        <div className='flex gap-3 pb-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory md:hidden'>
          {posts.map((post) => (
            <div
              key={post.id}
              className='w-40 h-40 bg-white rounded-2xl shadow-md p-4 flex-shrink-0 snap-center overflow-hidden'>
              <div className='flex gap-2 mb-2'>
                <RecruitLabel status={post.closed} />
                <CategoryLabel category={post.category} />
              </div>
              <p className='font-semibold mb-1 text-sm line-clamp-1'>
                {post.title}
              </p>
              <p className='text-[10px] text-black-60 leading-snug line-clamp-5'>
                {post.preview}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className='relative flex items-center'>
          <button
            className='absolute left-[-50px] z-10 p-2'
            onClick={handlePrev}>
            <img
              src={leftArrow}
              alt='이전'
              className='w-7 h-7'
              onMouseEnter={(e) => (e.currentTarget.src = mainLeftArrow)}
              onMouseLeave={(e) => (e.currentTarget.src = leftArrow)}
            />
          </button>

          <div className='grid grid-cols-3 gap-3 w-full h-50'>
            {posts.slice(startIndex, startIndex + 3).map((post) => (
              <div key={post.id} className='bg-white rounded-xl shadow-md p-4'>
                <div className='flex gap-2 mb-2'>
                  <RecruitLabel status={post.closed} />
                  <CategoryLabel category={post.category} />
                </div>
                <p className='font-semibold mb-1 text-sm line-clamp-2'>
                  {post.title}
                </p>
                <p className='text-[14px] text-black-60 leading-snug line-clamp-5'>
                  {post.preview}
                </p>
              </div>
            ))}
          </div>

          <button
            className='absolute right-[-50px] z-10 p-2'
            onClick={handleNext}>
            <img
              src={rightArrow}
              alt='다음'
              className='w-7 h-7'
              onMouseEnter={(e) => (e.currentTarget.src = mainRightArrow)}
              onMouseLeave={(e) => (e.currentTarget.src = rightArrow)}
            />
          </button>
        </div>
      )}
    </section>
  );
};

export default PopularPosts;
