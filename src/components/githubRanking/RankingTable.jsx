import React from 'react';

export default function RankingTable({pagedData, startIndex}) {
  return (
    <div className='flex justify-center bg-white rounded-[12px] h-[550px] w-[850px] shadow-1g'>
      <ul>
        <li className='flex justify-between px-1 py-2 font-semibold text-gray-500 mt-3'>
          <span className='w-[45px] text-sm' style={{color: '#A3A3A4'}}>
            순위
          </span>
          <span className='flex-1 text-sm' style={{color: '#A3A3A4'}}>
            이름
          </span>
          <span
            className='w-[90px] text-right text-sm mr-3'
            style={{color: '#A3A3A4'}}>
            Total
          </span>
        </li>
        {pagedData.map((user, index) => (
          <li key={startIndex + index} className='flex justify-between p-3'>
            <span className='font-bold mr-165'>
              <span className='mr-5'>
                {String(startIndex + index + 1).padStart(2, ' ')}
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
