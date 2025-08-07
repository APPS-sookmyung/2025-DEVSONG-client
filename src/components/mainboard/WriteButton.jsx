import {useState} from 'react';
import write from '../../assets/icons/writeIcon.svg';

const WriteButton = () => {
  return (
    <button className='ml-auto cursor-pointer flex-center gap-2 p-[6px] rounded-lg bg-main text-white md:p-1.5 lg:p-2 md:text-base'>
      <img src={write} alt='글쓰기' />
      <span className='hidden md:pr-[5px] md:inline'>글쓰기</span>
    </button>
  );
};

export default WriteButton;
