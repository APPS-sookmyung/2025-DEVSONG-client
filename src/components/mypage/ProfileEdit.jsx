import React from 'react';
import editIcon from '../../assets/icons/editIcon.svg';

const ProfileEdit = () => {
  return (
    <div className='bg-white rounded-[20px] p-[30px] shadow-box'>
      <h3 className='text-base font-bold text-black-100 mb-6 flex items-center gap-2'>
        <img src={editIcon} alt='edit icon' className='w-6 h-6' />
        자기소개
      </h3>

      <div className='flex flex-col gap-4'>
        <InputGroup label='이름' value='김눈송' />
        <InputGroup label='이메일' value='snow@sookmyung.ac.kr' />
        <InputGroup label='학번' value='2412345' />
        <InputGroup label='전공' value='데이터사이언스전공' />
      </div>

      <div className='flex-center gap-2.5 mt-8'>
        <button className='bg-main text-white text-sm font-bold px-8 py-2.5 rounded-lg transition-colors'>
          저장
        </button>
        <button className='bg-grey-02 text-black-60 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors'>
          비밀번호 변경
        </button>
      </div>
    </div>
  );
};

const InputGroup = ({label, value}) => (
  <div className='flex items-center'>
    <label className='w-[60px] text-sm font-bold text-black-100 shrink-0'>
      {label}
    </label>
    <input
      type='text'
      defaultValue={value}
      className='flex-1 bg-grey-01 rounded-lg px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-main transition-shadow'
    />
  </div>
);

export default ProfileEdit;
