import React from 'react';
import back from '../../assets/icons/back2.svg';
import vertical_ellipsis from '../../assets/icons/vertical_ellipsis.svg';

export default function ResumeHeaderMobile() {
  return (
    <div className='flex justify-between items-center mb-2 bg-white h-10'>
      <img src={back} alt='뒤로가기' className='w-5 h-5 ml-5' />
      <img src={vertical_ellipsis} alt='더보기' className='w-6 h-6 mr-5' />
    </div>
  );
}
