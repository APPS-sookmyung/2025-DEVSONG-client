import React, {useState, useEffect} from 'react';
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

const mockBaekjoonData = [
  {name: '김눈송', rating: 2400, solved: 850},
  {name: '김눈송', rating: 2100, solved: 720},
  {name: '김눈송', rating: 1950, solved: 500},
  {name: '김눈송', rating: 1800, solved: 430},
  {name: '김눈송', rating: 1750, solved: 300},
  {name: '김눈송', rating: 1600, solved: 250},
  {name: '김눈송', rating: 1550, solved: 210},
  {name: '김눈송', rating: 1500, solved: 180},
  {name: '김눈송', rating: 1450, solved: 150},
  {name: '김눈송', rating: 1400, solved: 120},
  {name: '김눈송', rating: 1350, solved: 100},
  {name: '김눈송', rating: 1300, solved: 90},
  {name: '김눈송', rating: 1250, solved: 80},
  {name: '김눈송', rating: 1200, solved: 70},
  {name: '김눈송', rating: 1150, solved: 60},
  {name: '김눈송', rating: 1100, solved: 50},
  {name: '김눈송', rating: 1050, solved: 40},
  {name: '김눈송', rating: 1000, solved: 30},
  {name: '김눈송', rating: 950, solved: 25},
  {name: '김눈송', rating: 900, solved: 20},
];

export default function BaekjoonRanking() {
  const [currentPage, setCurrentPage] = useState(1);
  const windowWidth = useWindowWidth();

  const itemsPerPage = windowWidth < 640 ? 16 : 10;

  const sortedData = [...mockBaekjoonData].sort((a, b) => b.rating - a.rating);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const pagedData = sortedData.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  return (
    <div className='flex flex-col items-center justify-center pt-0 sm:pt-15 bg-background'>
      <div className='w-full sm:w-auto sm:items-center sm:justify-center'>
        <BaekjoonRankingHeader />
        <div className='flex justify-center'>
          <BaekjoonRankingTable pagedData={pagedData} startIndex={startIndex} />
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
