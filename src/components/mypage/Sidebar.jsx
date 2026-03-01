import {useEffect, useState} from 'react';
import nextArrow from '@assets/icons/nextArrow.svg';
import {MENU_OPTIONS} from './constant';
import {getMyProfile} from '../../apis/mypage';

const Sidebar = ({
  activeTab,
  setActiveTab,
  username = '김눈송',
  studentId = '2520000',
  major = '한국어문학부',
}) => {
  const [profile, setProfile] = useState({
    username,
    studentId,
    major,
    profileImage: null,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getMyProfile();

        setProfile({
          username: data.username ?? username,
          studentId: data.studentId ?? studentId,
          major: data.major ?? major,
          profileImage: data.profileImageUrl ?? null,
        });
      } catch (error) {
        console.error('프로필 조회 실패:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <section className='bg-white w-71 min-w-71 h-fit flex flex-col items-center shrink-0 rounded-2xl px-3.5 pb-4 pt-11 shadow-box'>
      {/* 프로필 이미지 */}
      <div className='w-20 h-20 bg-[#4cd918] rounded-full mb-4'>
        {profile.profileImage ? (
          <img
            src={profile.profileImage}
            alt='profile'
            className='w-full h-full object-cover'
          />
        ) : null}
      </div>

      {/* 이름 */}
      <h2 className='text-2xl font-bold text-black-100 mb-5'>
        {profile.username}
      </h2>

      {/* 학번과 전공 */}
      <div className='text-lg/[28.8px] text-black font-medium text-center mb-9'>
        <p>{String(profile.studentId).slice(0, 2)}학번</p>
        <p>{profile.major}</p>
      </div>

      {/* 메뉴 옵션 */}
      <nav className='w-full flex flex-col gap-2'>
        {MENU_OPTIONS.map(({id, label, icon}) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`
              cursor-pointer w-full flex justify-between items-center px-3 py-2.5 rounded-xl transition-colors duration-150
              ${
                activeTab === id
                  ? 'bg-main text-white'
                  : 'bg-grey-01 text-black hover:bg-grey-02'
              }
            `}>
            <div className='flex items-center gap-3 text-sm'>
              <img
                src={icon}
                alt={label}
                className={`w-5 h-5 ${
                  activeTab === id ? 'brightness-0 invert' : 'stroke-black'
                }`}
              />
              <span className='text-base font-medium'>{label}</span>
            </div>

            <img
              src={nextArrow}
              alt='arrow'
              className={`w-5 h-5 ${
                activeTab === id ? 'brightness-0 invert' : ''
              }`}
            />
          </button>
        ))}
      </nav>
    </section>
  );
};

export default Sidebar;
