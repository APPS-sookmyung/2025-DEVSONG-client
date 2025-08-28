import React from 'react';
import profil from '../../assets/image/profil.svg';
import whiteEditIcon from '../../assets/icons/whiteEditIcon.svg';

export default function ProfileEditModal({closeModal}) {
  return (
    <div
      className='fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50'
      onClick={closeModal}>
      <div
        className='bg-white p-6 rounded-xl w-80 space-y-4 shadow-2xl'
        onClick={(e) => e.stopPropagation()}>
        <div className='flex flex-col items-center'>
          <div className='relative w-24 h-24 rounded-full'>
            <img
              src={profil}
              alt='프로필'
              className='w-full h-full object-cover'
            />
            <img
              src={whiteEditIcon}
              alt='프로필 편집'
              className='absolute bottom-0 right-2 w-5 h-5 rounded-full bg-main'
            />
          </div>
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>Github ID</label>
          <input
            type='text'
            defaultValue='Dotori'
            className='w-full p-2 rounded bg-grey-02'
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>BOJ 핸들</label>
          <input
            type='text'
            defaultValue='dotori0345'
            className='w-full p-2 rounded bg-grey-02'
          />
        </div>
        <div className='flex justify-between mt-4'>
          <button
            onClick={closeModal}
            className='w-1/2 p-2 bg-grey-02 rounded mr-2 cursor-pointer'>
            취소
          </button>
          <button
            onClick={closeModal}
            className='w-1/2 p-2 bg-main text-white rounded ml-2 cursor-pointer'>
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
