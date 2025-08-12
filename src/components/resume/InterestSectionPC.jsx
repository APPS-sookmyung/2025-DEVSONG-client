import React from 'react';
import editIcon from '../../assets/icons/editIcon.svg';

export default function InterestSectionPC({
  selectedInterests,
  setIsInterestModalOpen,
}) {
  return (
    <div className='bg-white p-4 rounded-3xl shadow'>
      <div className='flex justify-between items-center mb-2'>
        <span className='font-semibold'>관심 분야</span>
        <img
          src={editIcon}
          alt='편집'
          className='w-6 h-6 cursor-pointer'
          onClick={() => setIsInterestModalOpen(true)}
        />
      </div>
      <div className='flex flex-wrap gap-2'>
        {selectedInterests.map((item) => (
          <span
            key={item}
            className='px-3 py-1 rounded-md text-xs'
            style={{backgroundColor: '#E5E5FC'}}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
