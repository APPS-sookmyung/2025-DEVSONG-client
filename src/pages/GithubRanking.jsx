import React, {useState} from 'react';
import RankingHeader from '../components/githubRanking/RankingHeader';
import RankingTable from '../components/githubRanking/RankingTable';
import Pagination from '../components/githubRanking/Pagination';

const mockRankingData = [
  {name: '김눈송', total: 1286},
  {name: '김눈송', total: 1350},
  {name: '김눈송', total: 900},
  {name: '김눈송', total: 1450},
  {name: '김눈송', total: 1200},
  {name: '김눈송', total: 1500},
  {name: '김눈송', total: 1100},
  {name: '김눈송', total: 1000},
  {name: '김눈송', total: 1050},
  {name: '김눈송', total: 980},
  {name: '김눈송', total: 1250},
  {name: '김눈송', total: 1600},
  {name: '김눈송', total: 1320},
  {name: '김눈송', total: 1190},
  {name: '김눈송', total: 800},
  {name: '김눈송', total: 1120},
  {name: '김눈송', total: 1400},
  {name: '김눈송', total: 1180},
  {name: '김눈송', total: 1010},
  {name: '김눈송', total: 950},
  {name: '김눈송', total: 1105},
  {name: '김눈송', total: 1210},
  {name: '김눈송', total: 1275},
  {name: '김눈송', total: 1390},
  {name: '김눈송', total: 1340},
  {name: '김눈송', total: 970},
  {name: '김눈송', total: 990},
  {name: '김눈송', total: 1150},
  {name: '김눈송', total: 1520},
  {name: '김눈송', total: 1080},
];

export default function RankingList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const sortedData = [...mockRankingData].sort((a, b) => b.total - a.total);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const pagedData = sortedData.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  return (
    <div
      className='flex flex-col items-center justify-center pt-15'
      style={{backgroundColor: '#F9FAFC'}}>
      <div className='items-center justify-center'>
        <RankingHeader />
        <RankingTable pagedData={pagedData} startIndex={startIndex} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
