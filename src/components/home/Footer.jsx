import React from 'react';

const Footer = ({logo}) => (
  <div className='w-full max-w-5xl text-center mt-10 text-sm'>
    <div className='flex flex-col items-center'>
      <img src={logo} alt='로고' />
    </div>
    <p className='mt-2 text-black-80'>Devsong © 2025. All rights reserved.</p>
    <div className='flex justify-center gap-6 mt-3 text-xs text-black-80'>
      <p>이용약관</p>
      <p>개인정보 처리방침</p>
    </div>
  </div>
);

export default Footer;
