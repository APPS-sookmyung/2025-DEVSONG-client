import React from 'react';

export default function BaekjoonRankingTable({pagedData, startIndex}) {
  return (
    <div
      className='flex justify-center bg-white rounded-xl shadow-lg 
            w-87 h-140
            sm:w-140 sm:h-133 
            md:w-175 md:h-133 
            lg:w-210 lg:h-135'>
      <ul className='w-full flex flex-col'>
        {/* 테이블 헤더 */}
        <li className='flex items-center px-3 py-2 font-semibold text-gray-500 mt-3'>
          <span className='w-12 sm:w-16 text-sm text-center text-black-40'>
            순위
          </span>
          <span className='flex-1 text-sm text-center sm:text-left sm:pl-2 text-black-40'>
            이름
          </span>
          <span className='w-20 sm:w-24 text-sm text-center text-black-40'>
            AC Rating
          </span>
          <span className='w-16 sm:w-20 text-right text-sm mr-1 sm:mr-6 text-black-40'>
            푼 문제
          </span>
        </li>

        {/* 테이블 바디 */}
        {pagedData.map((user, index) => (
          <li
            key={startIndex + index}
            className='flex items-center p-1 sm:p-3 hover:bg-gray-50'>
            {/* 순위 */}
            <span className='w-12 sm:w-16 font-bold text-center'>
              {startIndex + index + 1}
            </span>

            {/* 이름 */}
            <span className='flex-1 font-bold truncate text-center sm:text-left sm:pl-0'>
              {user.name}
            </span>

            {/* AC Rating */}
            <span
              className='w-20 sm:w-22 font-semibold text-center'
              style={{color: '#747577'}}>
              {user.rating}
            </span>

            {/* 푼 문제 */}
            <span
              className='w-16 sm:w-20 font-semibold text-right mr-1 sm:mr-7'
              style={{color: '#747577'}}>
              {user.solved}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
