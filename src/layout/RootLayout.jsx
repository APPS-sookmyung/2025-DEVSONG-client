import React from 'react';
import Navbar from './Navbar';
import {Outlet, useLocation, matchPath} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '@components/common/ScrollToTop';

// 모바일 헤더 레이아웃이 따로 있는 경우
const NO_DEFAULT_MOBILE_HEADER_PATHS = [
  '/post',
  '/resume',
  '/githubRanking',
  '/chat',
  '/my',
];

const HIDE_LAYOUT_PATHS = ['/posts/write', '/'];

const RootLayout = () => {
  const {pathname} = useLocation();

  const hideLayout = HIDE_LAYOUT_PATHS.includes(pathname);

  const noMobileHeader = NO_DEFAULT_MOBILE_HEADER_PATHS.some((path) =>
    pathname.startsWith(path)
  );

  const noMobileNavbar = matchPath('/post/:id', pathname) !== null;

  if (hideLayout) {
    // 게시글 작성, 로그인 페이지: 헤더, 풋터, navbar X
    return (
      <>
        <div className='min-h-screen flex flex-col'>
          <ScrollToTop />
          <main className='flex-1'>
            <Outlet />
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <ScrollToTop />
        <header className={`${noMobileHeader ? 'hidden md:block' : ''}`}>
          <Header />
        </header>

        <main className={`flex-1 ${noMobileNavbar ? '' : 'mb-28'} md:mb-12`}>
          <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>

        <nav>
          <Navbar />
        </nav>
      </div>
    </>
  );
};

export default RootLayout;
