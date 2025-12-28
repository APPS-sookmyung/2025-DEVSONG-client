import prevArrow from '@assets/icons/prevArrow.svg';
import nextArrow from '@assets/icons/nextArrow.svg';
import Button from '@components/common/Button';

export default function Pagination({currentPage, totalPages, setCurrentPage}) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className='flex-center space-x-2 mt-6 gap-2'>
      <Button
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={isFirstPage}
        className='disabled:opacity-30 bg-white rounded-md p-1.5 md:p-2'
        size='none'>
        <img src={prevArrow} alt='이전' className='w-3 h-3 md:w-6 md:h-6' />
      </Button>

      {Array.from({length: totalPages}, (_, i) => (
        <Button
          key={i + 1}
          variant={`${currentPage === i + 1 ? 'primary' : 'secondary'}`}
          onClick={() => setCurrentPage(i + 1)}
          className={`w-6 h-6 md:w-8 md:h-8 rounded-md text-center text-[10px]`}
          size='none'>
          {i + 1}
        </Button>
      ))}
      <Button
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={isLastPage}
        className='disabled:opacity-30 bg-white rounded-md p-1.5 md:p-2'
        size='none'>
        <img src={nextArrow} alt='다음' className='w-3 h-3 md:w-6 md:h-6' />
      </Button>
    </div>
  );
}
