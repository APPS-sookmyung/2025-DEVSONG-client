import React from 'react';
import profil from '../../assets/image/profil.svg';
import whiteEditIcon from '../../assets/icons/whiteEditIcon.svg';

export default function ProfileCardMobile({setIsModalOpen}) {
  return (
    <div className='flex justify-between items-center bg-white p-4 rounded-xl shadow m-4'>
      <div className='flex items-center'>
        <div className='relative w-14 h-14 rounded-full'>
          <img
            src={profil}
            alt='프로필'
            className='w-full h-full object-cover'
          />
          <img
            src={whiteEditIcon}
            alt='프로필 편집'
            onClick={() => setIsModalOpen(true)}
            className='absolute bottom-0 right-0 w-4 h-4 rounded-full cursor-pointer'
            style={{backgroundColor: '#5C5AEE'}}
          />
        </div>
        <div className='ml-4'>
          <div className='font-semibold text-lg'>윤정빈</div>
          <div className='flex text-sm gap-3'>
            <span>컴퓨터과학전공</span>
            <span>23학번</span>
          </div>
          <div className='flex mt-1 text-xs space-x-2'>
            <span style={{color: '#A3A3A4'}}>
              Github <br />
              <span className='font-medium text-black'>Dotori</span>
            </span>
            <span style={{color: '#A3A3A4'}}>
              BOJ <br />
              <span className='font-medium text-black'>dotori0345</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
