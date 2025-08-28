import React from 'react';
import editIcon from '../../assets/icons/editIcon.svg';

export default function StackSectionMobile({
  selectedStacks,
  setIsStackModalOpen,
}) {
  return (
    <div className='bg-white p-4 rounded-xl shadow m-4'>
      <div className='flex justify-between items-center mb-2'>
        <span className='font-semibold'>기술 스택</span>
        <img
          src={editIcon}
          alt='편집'
          className='w-6 h-6 cursor-pointer'
          onClick={() => setIsStackModalOpen(true)}
        />
      </div>
      <div className='flex flex-wrap gap-2'>
        {selectedStacks.map((item) => (
          <span key={item} className='px-3 py-1 rounded-md text-xs bg-main-16'>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
