import React from 'react';

export default function RankingTable({pagedData, startIndex}) {
  return (
    <div
      className='flex justify-center bg-white rounded-xl shadow-1g 
            w-87 h-140
            sm:w-140 sm:h-133 
            md:w-175 md:h-133 
            lg:w-210 lg:h-135'>
      <ul>
        <li className='flex justify-between px-3 py-2 font-semibold text-gray-500 mt-3'>
          <span className='w-10.5 text-sm' style={{color: '#A3A3A4'}}>
            순위
          </span>
          <span className='flex-1 text-sm' style={{color: '#A3A3A4'}}>
            이름
          </span>
          <span
            className='w-22 text-right text-sm mr-1 sm:mr-1'
            style={{color: '#A3A3A4'}}>
            Total
          </span>
        </li>
        {pagedData.map((user, index) => (
          <li
            key={startIndex + index}
            className='flex justify-between p-1 sm:p-3'>
            <span className='font-bold mr-50 sm:mr-100 md:mr-130 lg:mr-165'>
              <span className='mr-5'>
                {startIndex + index + 1 < 10
                  ? '\u00A0\u00A0' + (startIndex + index + 1)
                  : startIndex + index + 1}
              </span>
              <span>{user.name}</span>
            </span>
            <span className='font-semibold' style={{color: '#747577'}}>
              {user.total}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
