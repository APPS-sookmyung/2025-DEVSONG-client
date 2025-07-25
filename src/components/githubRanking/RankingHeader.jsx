import React from 'react';
import back from '../../assets/icons/back.svg';

export default function RankingHeader() {
  return (
    <div className='flex gap-4 mb-5'>
      <img className='self-start rounded-[4px]' src={back} alt='back' />
      <span className='font-bold'>Github 랭킹</span>
    </div>
  );
}
