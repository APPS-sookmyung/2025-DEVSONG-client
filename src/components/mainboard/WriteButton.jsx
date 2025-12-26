import {useState} from 'react';
import write from '../../assets/icons/writeIcon.svg';
import {useNavigate} from 'react-router-dom';

const WriteButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('write')}
      className='ml-auto cursor-pointer flex-center gap-2 p-[6px] rounded-lg bg-main text-white md:p-1.5 lg:p-2 md:text-base'>
      <img src={write} className='md:w-6 md:h-6' alt='글쓰기' />
      <span className='hidden md:pr-[5px] md:inline'>글쓰기</span>
    </button>
  );
};

export default WriteButton;
