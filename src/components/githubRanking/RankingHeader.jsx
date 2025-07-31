import React from 'react';
import back from '../../assets/icons/back.svg';

export default function RankingHeader() {
  return (
    <div className='flex items-center gap-4 mb-5 px-2 sm:px-0'>
      <img
        className='w-6 h-6 sm:w-7 sm:h-7 rounded-[4px] cursor-pointer'
        src={back}
        alt='back'
      />
      <span className='text-base sm:text-xl font-bold'>Github 랭킹</span>
    </div>
  );
}
