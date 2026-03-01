import React from 'react';
// import profil from '../../assets/image/profil.svg';
import messageIcon from '../../assets/icons/messageIcon.svg';

export default function ProfileCardPC({
  setIsModalOpen,
  user,
  isApplicantResume,
  onChatStart,
}) {
  return (
    <div className='bg-white p-6 rounded-3xl shadow w-full md:w-1/3 flex flex-col items-center mt-15 md:h-95 lg:h-90'>
      {isApplicantResume && (
        <img
          src={messageIcon}
          alt='메시지'
          onClick={onChatStart}
          className='w-8 h-8 ml-50 md:ml-25 lg:ml-50 cursor-pointer'
        />
      )}
      <div className='relative w-24 h-24 rounded-full'>
        <img
          src={user.profil}
          alt='프로필'
          className='w-30 h-25 rounded-full object-cover'
        />
      </div>
      <div className='mt-4 text-center'>
        <div className='font-semibold text-lg'>{user.username}</div>
        <div className='text-sm mt-1'>{user.admissionYear}학번</div>
        <div className='text-sm mt-1'>{user.major}</div>
        <div className='flex justify-center gap-10 mt-3 text-xs'>
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
      {!isApplicantResume && (
        <button
          onClick={() => setIsModalOpen(true)}
          className='mt-4 sm:px-10 py-2 md:px-8 lg:px-20 text-white text-sm rounded-lg cursor-pointer bg-main whitespace-nowrap'>
          프로필 수정
        </button>
      )}
    </div>
  );
}
