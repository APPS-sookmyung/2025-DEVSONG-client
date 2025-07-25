import React from 'react';
import prevArrow from '../../assets/icons/prevArrow.svg';
import nextArrow from '../../assets/icons/nextArrow.svg';

export default function Pagination({currentPage, totalPages, setCurrentPage}) {
  return (
    <div className='flex justify-center space-x-2 mt-6 gap-[10px]'>
      <button
        onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
        disabled={currentPage === 1}
        className='disabled:opacity-30'>
        <img
          src={prevArrow}
          alt='이전'
          className='w-8 h-8 bg-white rounded-[8px]'
        />
      </button>

      {Array.from({length: totalPages}, (_, i) => (
        <button
          key={i + 1}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-3 py-1 rounded ${
            currentPage === i + 1
              ? 'text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
          style={currentPage === i + 1 ? {backgroundColor: '#5C5AEE'} : {}}>
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
        disabled={currentPage === totalPages}
        className='disabled:opacity-30'>
        <img
          src={nextArrow}
          alt='다음'
          className='w-8 h-8 bg-white rounded-[8px]'
        />
      </button>
    </div>
  );
}
