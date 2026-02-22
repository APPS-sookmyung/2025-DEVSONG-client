import write from '@assets/icons/writeIcon.svg';
import {Link} from 'react-router-dom';
import Button from '@components/common/Button';

const WriteButton = () => {
  return (
    <Button variant='primary' size='none' className='ml-auto p-1.5 md:p-2'>
      <Link to='write' className='flex-center gap-2'>
        <img src={write} className='md:w-6 md:h-6' alt='글쓰기' />
        <span className='hidden md:pr-[5px] md:inline'>글쓰기</span>
      </Link>
    </Button>
  );
};

export default WriteButton;
