import React from 'react';
// import profil from '../../assets/image/profil.svg';
import whiteEditIcon from '../../assets/icons/whiteEditIcon.svg';

export default function ProfileCardMobile({setIsModalOpen, user}) {
  return (
    <div className='flex justify-between items-center bg-white p-4 rounded-xl shadow m-4'>
      <div className='flex items-center'>
        <div className='relative w-14 h-14 rounded-full'>
          <img
            src={user.profil}
            alt='프로필'
            className='w-full h-full object-cover'
          />
          <img
            src={whiteEditIcon}
            alt='프로필 편집'
            onClick={() => setIsModalOpen(true)}
            className='absolute bottom-0 right-0 w-4 h-4 rounded-full cursor-pointer bg-main'
          />
        </div>
        <div className='ml-4'>
          <div className='font-semibold text-lg'>{user.username}</div>
          <div className='flex text-sm gap-3'>
            <span>{user.major}</span>
            <span>{user.admissionYear}학번</span>
          </div>
          <div className='flex mt-1 text-xs space-x-2'>
            <span className='text-black-40'>
              Github <br />
              <span className='font-medium text-black'>{user.githubId}</span>
            </span>
            <span className='text-black-40'>
              BOJ <br />
              <span className='font-medium text-black'>{user.bojId}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
