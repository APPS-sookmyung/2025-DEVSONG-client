import React from 'react';
import Navbar from '../components/common/Navbar';
import {Outlet} from 'react-router-dom';
import Header from '../components/common/Header';

const RootLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className='flex-1 bg-[#F9FAFC]'>
        <Outlet />
      </div>
      <Navbar />
    </div>
  );
};

export default RootLayout;
