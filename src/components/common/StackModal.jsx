import React from 'react';
import editIcon from '../../assets/icons/editIcon.svg';

export default function StackModal({
  allStacks,
  selectedStacks,
  toggleStack,
  closeModal,
}) {
  return (
    <div
      className='fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50'
      onClick={closeModal}>
      <div
        className='bg-white p-6 rounded-xl w-96 max-h-[80vh] overflow-y-auto shadow-2xl'
        onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-lg font-semibold'>기술 스택</h2>
          <img
            src={editIcon}
            alt='닫기'
            className='w-6 h-6 cursor-pointer'
            onClick={closeModal}
          />
        </div>
        <div className='flex flex-wrap gap-2'>
          {allStacks.map((stack) => {
            const isSelected = selectedStacks.includes(stack);
            return (
              <span
                key={stack}
                onClick={() => toggleStack(stack)}
                className={`px-3 py-1 rounded-md text-xs cursor-pointer ${
                  isSelected ? 'bg-main-16' : 'bg-grey-02'
                }`}>
                {stack}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
