import React from 'react';
import Navbar from './Navbar';
import {Outlet, useLocation} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

// 모바일 헤더 레이아웃이 따로 있는 경우
const NO_DEFAULT_MOBILE_HEADER_PATHS = [
  '/post',
  '/resume',
  '/githubRanking',
  '/chat',
  '/my',
];

const POST_FORM_PATH = '/posts/write';

const RootLayout = () => {
  const {pathname} = useLocation();
  const hideLayout = pathname === POST_FORM_PATH;
  const noMobileHeader = NO_DEFAULT_MOBILE_HEADER_PATHS.some((path) =>
    pathname.startsWith(path)
  );

  if (hideLayout) {
    // 게시글 작성 페이지: 헤더, 풋터, navbar X
    return (
      <div className='min-h-screen flex flex-col'>
        <main className='flex-1'>
          <Outlet />
        </main>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <header className={`${noMobileHeader ? 'hidden md:block' : ''}`}>
        <Header />
      </header>

      <main className='flex-1 mb-12'>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>

      <nav>
        <Navbar />
      </nav>
    </div>
  );
};

export default RootLayout;
