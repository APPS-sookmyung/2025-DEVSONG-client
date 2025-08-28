import React, {useState, useEffect} from 'react';
import SearchBar from '../components/common/SearchBar';
import PopularPosts from '../components/home/PopularPosts';
import RankingSection from '../components/home/RankingSection';
import Footer from '../components/home/Footer';
import logo from '../assets/images/logo.svg';

import {
  popularPosts,
  githubRanking,
  bojRanking,
} from '../components/home/dummy';

const Home = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => startIndex > 0 && setStartIndex(startIndex - 3);
  const handleNext = () =>
    startIndex + 3 < popularPosts.length && setStartIndex(startIndex + 3);

  return (
    <div>
      <div className='relative flex flex-col items-center gap-2'>
        <div className='absolute z-[-1] w-full h-hidden md:h-91 lg:h-85 bg-linear-[154deg,#a4b8ff_0%,#a8d4ff_56.76%,#d9f6ff_86.78%] rounded-b-4xl'></div>

        <SearchBar />

        <PopularPosts
          posts={popularPosts}
          startIndex={startIndex}
          handlePrev={handlePrev}
          handleNext={handleNext}
          isMobile={isMobile}
        />

        <RankingSection githubData={githubRanking} bojData={bojRanking} />

        {isMobile && <Footer logo={logo} />}
      </div>
    </div>
  );
};

export default Home;
