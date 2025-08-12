import React from 'react';
import editIcon from '../../assets/icons/editIcon.svg';

export default function InterestModal({
  allInterests,
  selectedInterests,
  toggleInterest,
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
          <h2 className='text-lg font-semibold'>관심 분야</h2>
          <img
            src={editIcon}
            alt='닫기'
            className='w-6 h-6 cursor-pointer'
            onClick={closeModal}
          />
        </div>
        <div className='flex flex-wrap gap-2'>
          {allInterests.map((interest) => {
            const isSelected = selectedInterests.includes(interest);
            return (
              <span
                key={interest}
                onClick={() => toggleInterest(interest)}
                className='px-3 py-1 rounded-md text-xs cursor-pointer'
                style={{backgroundColor: isSelected ? '#E5E5FC' : '#E5E5E5'}}>
                {interest}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
