import React, {useState, useEffect} from 'react';
import nextArrow from '../../assets/icons/nextArrow.svg';
import {useNavigate} from 'react-router-dom';
import {fetchGithubRanking} from '../../apis/githubRanking';

const RankingSection = ({githubData, bojData}) => {
  const [realGithubData, setRealGithubData] = useState([]);

  useEffect(() => {
    const getGithubData = async () => {
      try {
        const data = await fetchGithubRanking();
        if (Array.isArray(data)) {
          const sortedData = data.sort(
            (a, b) => a.rank - b.rank || b.commitCount - a.commitCount
          );
          setRealGithubData(sortedData.slice(0, 5));
        }
      } catch (error) {
        console.error('Github 랭킹 데이터 로딩 실패:', error);
      }
    };

    getGithubData();
  }, []);

  const safeBojData = bojData || [];

  return (
    <div className='w-full max-w-5xl px-4 mt-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
      <RankingTable
        title='Github 랭킹'
        data={realGithubData}
        link='/githubRanking'
      />

      <RankingTable
        title='BOJ 랭킹'
        data={safeBojData}
        isBOJ
        link='/bojRanking'
      />
    </div>
  );
};

const RankingTable = ({title, data, isBOJ, link}) => {
  const navigate = useNavigate();
  const emptyRows = Math.max(0, 5 - (data?.length || 0));

  return (
    <div className='bg-grey-02 rounded-[24px] p-4'>
      <div className='flex justify-between items-center mb-3'>
        <h2 className='font-bold'>{title}</h2>
        <img
          src={nextArrow}
          alt='더보기'
          onClick={() => navigate(link)}
          className='cursor-pointer hover:opacity-70 transition-opacity'
        />
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
          {data &&
            data.map((item, index) => (
              <tr key={item.githubId || item.rank || index}>
                <td className='py-2 pl-5 font-semibold'>
                  {item.rank ? item.rank : index + 1}
                </td>
                <td className='font-semibold'>{item.username || item.name}</td>
                {isBOJ && (
                  <td className='text-right pr-5 text-black-60'>
                    {item.acRating || item.rating}
                  </td>
                )}
                <td
                  className={`text-right text-black-60 ${
                    isBOJ ? 'pr-7' : 'pr-4'
                  }`}>
                  {/* Github는 commitCount, 백준은 solvedCount */}
                  {isBOJ ? item.solvedCount : item.commitCount}
                </td>
              </tr>
            ))}

          {Array.from({length: emptyRows}).map((_, index) => (
            <tr key={`empty-${index}`}>
              <td className='py-2 pl-5'>&nbsp;</td>
              <td></td>
              {isBOJ && <td></td>}
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankingSection;
