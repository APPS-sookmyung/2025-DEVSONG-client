import React from 'react';

export default function RankingTable({pagedData, startIndex}) {
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
          <span className='flex-1 text-sm text-center pr-30 sm:text-left sm:pl-2 text-black-40'>
            이름
          </span>
          <span className='w-24 sm:w-32 text-right text-sm mr-1 sm:mr-8 text-black-40'>
            Total
          </span>
        </li>

        {/* 테이블 바디 */}
        {pagedData.map((user, index) => (
          <li
            key={user.githubId || startIndex + index} // githubId가 고유값
            className='flex items-center p-1 sm:p-3 hover:bg-gray-50'>
            <span className='w-12 sm:w-16 font-bold text-center'>
              {user.rank ? user.rank : startIndex + index + 1}
            </span>

            {/* 이름 (Github ID 포함) */}
            <span className='flex-1 font-bold truncate text-center pr-30 sm:text-left sm:pl-0'>
              {user.username}
            </span>

            {/* Commit Count */}
            <span
              className='w-24 sm:w-32 font-semibold text-right mr-1 sm:mr-7 pr-3'
              style={{color: '#747577'}}>
              {user.commitCount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
