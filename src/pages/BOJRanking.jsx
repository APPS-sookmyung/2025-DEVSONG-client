import React, {useState, useEffect} from 'react';
import {fetchBojRanking} from '../apis/bojRanking';
import BaekjoonRankingHeader from '../components/BOJRanking/RankingHeader';
import BaekjoonRankingTable from '../components/BOJRanking/RankingTable';
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

export default function BaekjoonRanking() {
  const [rankingData, setRankingData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const windowWidth = useWindowWidth();

  const itemsPerPage = windowWidth < 640 ? 16 : 10;

  useEffect(() => {
    const getRanking = async () => {
      try {
        const data = await fetchBojRanking();

        if (Array.isArray(data)) {
          setRankingData(data);
        } else {
          setRankingData([]);
        }
      } catch (error) {
        setRankingData([]); // 에러 시 빈 배열
      }
    };

    getRanking();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const pagedData = Array.isArray(rankingData)
    ? rankingData.slice(startIndex, startIndex + itemsPerPage)
    : [];

  const totalPages = Math.ceil(rankingData.length / itemsPerPage);

  return (
    <div className='flex flex-col items-center justify-center pt-0 sm:pt-15 bg-background'>
      <div className='w-full sm:w-auto sm:items-center sm:justify-center'>
        <BaekjoonRankingHeader />
        <div className='flex justify-center'>
          <BaekjoonRankingTable pagedData={pagedData} startIndex={startIndex} />
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
