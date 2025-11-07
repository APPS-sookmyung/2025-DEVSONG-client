import React from 'react';
import Navbar from '../components/common/Navbar';
import {Outlet, useMatch} from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const RootLayout = () => {
  const hideLayout = useMatch('/posts/write') !== null;

  if (hideLayout) {
    // 게시글 작성 페이지: 헤더, 풋터, 네브바 X
    return (
      <div className='min-h-screen flex flex-col'>
        <div className='flex-1 pb-30 md:pb-12'>
          <Outlet />
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className='flex-1 pb-30 md:pb-12'>
        <Outlet />
      </div>
      <Footer />
      <Navbar />
    </div>
  );
};

export default RootLayout;
