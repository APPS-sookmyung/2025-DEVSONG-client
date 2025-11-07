import React from 'react';
import nextArrow from '../../assets/icons/nextArrow.svg';

const RankingSection = ({githubData, bojData}) => {
  return (
    <div className='w-full max-w-5xl px-4 mt-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
      <RankingTable title='Github 랭킹' data={githubData} />
      <RankingTable title='BOJ 랭킹' data={bojData} isBOJ />
    </div>
  );
};

const RankingTable = ({title, data, isBOJ}) => (
  <div className='bg-grey-02 rounded-[24px] p-4'>
    <div className='flex justify-between items-center mb-3'>
      <h2 className='font-bold'>{title}</h2>
      <img src={nextArrow} alt='더보기' />
    </div>
    <table className='w-full text-sm bg-white rounded-[12px]'>
      <thead>
        <tr className='text-black-20 text-left'>
          <th className='w-12 pl-4 text-xs pt-3 font-normal'>순위</th>
          <th className='pl-2 text-xs pt-3 font-normal'>이름</th>
          {isBOJ && (
            <th className='text-right text-xs pt-3 font-normal pl-33'>
              AC 레이팅
            </th>
          )}
          <th className='pr-4 text-right text-xs pt-3 font-normal'>
            {isBOJ ? '푼 문제' : 'Total'}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.rank}>
            <td className='py-2 pl-5 font-semibold'>{item.rank}</td>
            <td className='font-semibold'>{item.name}</td>
            {isBOJ && (
              <td className='text-right pr-2 text-black-60'>{item.acRating}</td>
            )}
            <td className='text-right pr-4 text-black-60'>
              {isBOJ ? item.solvedCount : item.total}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RankingSection;
