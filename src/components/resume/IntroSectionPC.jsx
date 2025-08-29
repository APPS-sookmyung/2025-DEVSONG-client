import React from 'react';
import editIcon from '../../assets/icons/editIcon.svg';

export default function IntroSectionPC({user}) {
  return (
    <div className='bg-white p-4 rounded-3xl shadow h-70'>
      <div className='flex justify-between items-center mb-2'>
        <span className='font-semibold'>자기소개</span>
        <img src={editIcon} alt='편집' className='w-6 h-6' />
      </div>
      <p className='text-sm'>{user.introduction}</p>
    </div>
  );
}
