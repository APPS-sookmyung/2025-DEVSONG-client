import PostList from '@components/common/PostList';
import {MENU_OPTIONS} from './constant';
import {useState} from 'react';
import nextArrow from '@assets/icons/nextArrow.svg';
import backArrow from '@assets/icons/back2.svg';
import InputField from '@components/common/InputField';
import Button from '@components/common/Button';

const MobileMyPage = ({
  activeTab,
  setActiveTab,
  dummyPosts,
  username = '김눈송',
  email = 'snow@sookmyung.ac.kr',
  studentId = '2412345',
  major = '데이터사이언스전공',
}) => {
  const [mobileSection, setMobileSection] = useState('info'); // 'info' 또는 'storage'
  const isDetailView = mobileSection === 'storage' && activeTab !== 'edit'; // 상세 목록 보기 모드인지 확인

  // 뒤로가기 핸들러
  const handleBack = () => {
    setActiveTab('edit');
    setMobileSection('storage');
  };

  /*  상세 목록 뷰 */
  if (isDetailView) {
    return (
      <div className='w-full h-full bg-white'>
        <div className='relative flex items-center p-6'>
          <button onClick={handleBack}>
            <img src={backArrow} alt='뒤로가기' className='w-6 h-6' />
          </button>
          <h2 className='absolute inset-x-0 text-center text-base font-semibold pointer-events-none'>
            {MENU_OPTIONS.find((menu) => menu.id === activeTab)?.label}
          </h2>
        </div>

        <div className='bg-background h-full py-4 px-6  mb-20'>
          {activeTab === 'written' && <PostList posts={dummyPosts} />}
          {activeTab === 'comments' && <PostList posts={dummyPosts} />}
          {activeTab === 'liked' && <PostList posts={dummyPosts} />}
          {activeTab === 'applied' && <PostList posts={dummyPosts} />}
        </div>
      </div>
    );
  }

  /* 마이페이지 메인 */
  return (
    <div className='w-full h-full bg-background flex flex-col gap-6 mb-20'>
      <h1 className='bg-white py-6 text-center font-semibold text-base'>
        내 프로필
      </h1>

      {/* 상단 프로필 카드 */}
      <div className='px-6'>
        <div className='bg-white rounded-xl p-4 shadow-box flex items-center gap-4'>
          <div className='w-14 h-14 bg-[#4cd918] rounded-full shrink-0'>
            {/* Todo: 프로필 이미지 */}
          </div>

          {/* 이름, 학번, 전공 정보 */}
          <div className='flex flex-col gap-1'>
            <h2 className='text-base/normal font-bold'>{username}</h2>
            <p className='text-sm/[22.4px] font-medium'>
              {major} {studentId.slice(0, 2)}학번
            </p>
          </div>
        </div>
      </div>

      {/* 세그먼트 탭 컨트롤러 */}
      <div className='flex gap-2 *:rounded-lg *:cursor-pointer px-6'>
        {/* 내 정보 탭 버튼 */}
        <button
          onClick={() => {
            setMobileSection('info');
            setActiveTab('edit');
          }}
          className={`flex-1 py-1.25 text-center text-sm/[22.4px] font-medium transition-all ${
            mobileSection === 'info' ? 'bg-white' : 'bg-grey-02 text-black-60'
          }`}>
          내 정보
        </button>

        {/* 보관함 탭 버튼 */}
        <button
          onClick={() => setMobileSection('storage')}
          className={`flex-1 py-1.25 text-center text-sm/[22.4px] font-medium transition-all ${
            mobileSection === 'storage'
              ? 'bg-white '
              : 'bg-grey-02 text-black-60'
          }`}>
          보관함
        </button>
      </div>

      {/* 하단 콘텐츠 영역 */}
      {mobileSection === 'info' ? (
        // 내 정보 폼
        <div className='flex flex-col gap-5 px-6'>
          <div className='bg-white flex flex-col gap-6 p-4 rounded-xl shadow-box'>
            <InputField
              label='이름'
              value={username}
              onChange={() => {}}
              className='h-9 text-sm'
            />
            <InputField
              label='이메일'
              value={email}
              className='h-9 text-sm'
              readOnly
            />
            <InputField
              label='학번'
              value={studentId}
              onChange={() => {}}
              className='h-9 text-sm'
            />
            <InputField
              label='전공'
              value={major}
              onChange={() => {}}
              className='h-9 text-sm'
            />
          </div>

          <div className='flex justify-end gap-2'>
            <Button variant='tertiary' size='md' className='w-26.5'>
              저장
            </Button>
            <Button variant='tertiary' size='md' className='w-26.5'>
              로그아웃
            </Button>
          </div>
        </div>
      ) : (
        // 보관함 메뉴 리스트
        <nav className='flex flex-col gap-3 px-6'>
          {MENU_OPTIONS.filter((option) => option.id !== 'edit').map(
            ({id, label, icon}) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className='cursor-pointer bg-grey-02 rounded-lg w-full flex justify-between items-center p-4'>
                <div className='flex items-center gap-3'>
                  <img src={icon} alt='' className='w-6 h-6' />
                  <span className='text-base/normal font-medium'>{label}</span>
                </div>
                <img src={nextArrow} alt='이동' className='w-6 h-6' />
              </button>
            )
          )}
        </nav>
      )}
    </div>
  );
};

export default MobileMyPage;
