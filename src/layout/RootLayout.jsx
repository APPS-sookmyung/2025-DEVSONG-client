import React from 'react';
import Navbar from '../components/common/Navbar';
import {Outlet} from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-1 bg-[#F9FAFC]'>
        <Outlet />
      </div>
      <Navbar />
    </div>
  );
};

export default RootLayout;
