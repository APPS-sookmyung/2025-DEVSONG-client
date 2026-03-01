import React, {useEffect, useState} from 'react';
import editIcon from '@assets/icons/editIcon.svg';
import Button from '@components/common/Button';
import {getMyProfile, updateMyProfile} from '../../apis/mypage';

const ProfileEdit = ({
  username = '김눈송',
  email = 'snow@sookmyung.ac.kr',
  studentId = '2412345',
  major = '데이터사이언스전공',
}) => {
  const [form, setForm] = useState({
    username,
    email,
    studentId,
    major,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getMyProfile();
        setForm(data);
      } catch (err) {
        console.error('프로필 조회 실패:', err);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const updated = await updateMyProfile(form);
      setForm(updated);
      // alert('수정 완료되었습니다.');
    } catch (err) {
      console.error('프로필 수정 실패:', err);
    }
  };

  return (
    <div className='w-full max-w-133.5 h-fit bg-white rounded-3xl p-6 shadow-box'>
      {/* 제목과 아이콘 */}
      <h3 className='text-base font-bold text-black-100 mb-6 flex items-center gap-2'>
        <img src={editIcon} alt='edit icon' className='w-6 h-6' />
        자기소개
      </h3>

      {/* 입력 필드 */}
      <div className='w-full flex flex-col gap-4'>
        <InputGroup
          label='이름'
          value={form.username}
          onChange={(v) => handleChange('username', v)}
        />
        <InputGroup
          label='이메일'
          value={form.email}
          onChange={(v) => handleChange('email', v)}
        />
        <InputGroup
          label='학번'
          value={form.studentId}
          onChange={(v) => handleChange('studentId', v)}
        />
        <InputGroup
          label='전공'
          value={form.major}
          onChange={(v) => handleChange('major', v)}
        />
      </div>

      <div className='mt-8 flex justify-end'>
        <Button
          variant='primary'
          size='md'
          className='w-30 shrink-0'
          onClick={handleSave}>
          저장
        </Button>
      </div>
    </div>
  );
};

const InputGroup = ({label, value, onChange}) => {
  const id = `field-${label}`;

  return (
    <div className='w-full flex items-center gap-5'>
      <label
        htmlFor={id}
        className='w-10.5 text-base/[25.6px] font-medium text-black-100 shrink-0'>
        {label}
      </label>
      <input
        id={id}
        type='text'
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        className='flex-1 bg-grey-01 rounded-lg px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-main transition-shadow'
      />
    </div>
  );
};

export default ProfileEdit;
