import React, {useState, useEffect} from 'react';
import {fetchGithubRanking} from '../apis/githubRanking';
import RankingHeader from '../components/githubRanking/RankingHeader';
import RankingTable from '../components/githubRanking/RankingTable';
import Pagination from '../components/githubRanking/Pagination';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}

export default function RankingList() {
  const [rankingData, setRankingData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const windowWidth = useWindowWidth();

  const itemsPerPage = windowWidth < 640 ? 16 : 10;

  useEffect(() => {
    const getRanking = async () => {
      try {
        const data = await fetchGithubRanking();

        if (Array.isArray(data)) {
          const sortedData = data.sort(
            (a, b) => a.rank - b.rank || b.commitCount - a.commitCount
          );
          setRankingData(sortedData);
        } else {
          setRankingData([]);
        }
      } catch (error) {
        console.error('Github 랭킹 로딩 실패', error);
        setRankingData([]);
      }
    };

    getRanking();
  }, []);

  // 현재 페이지에 보여줄 데이터 자르기
  const startIndex = (currentPage - 1) * itemsPerPage;
  const pagedData = Array.isArray(rankingData)
    ? rankingData.slice(startIndex, startIndex + itemsPerPage)
    : [];

  const totalPages = Math.ceil(rankingData.length / itemsPerPage);

  return (
    <div
      className='flex flex-col items-center justify-center pt-0 sm:pt-15'
      style={{backgroundColor: '#F9FAFC'}}>
      <div className='w-full sm:w-auto sm:items-center sm:justify-center'>
        <RankingHeader />
        <div className='flex justify-center'>
          <RankingTable pagedData={pagedData} startIndex={startIndex} />
        </div>

        {/* 데이터가 있을 때만 페이지네이션 표시 */}
        {rankingData.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}
