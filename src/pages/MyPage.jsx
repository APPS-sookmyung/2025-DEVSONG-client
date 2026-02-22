import React, {useState} from 'react';
import Sidebar from '../components/mypage/Sidebar';
import ProfileEdit from '../components/mypage/ProfileEdit';
import AppliedPosts from '../components/mypage/AppliedPosts';

function MyPage() {
  const [activeTab, setActiveTab] = useState('edit');

  return (
    <div className='h-[710px] w-full bg-background overflow-hidden flex justify-center pt-[100px]'>
      <div className='flex gap-10 w-[1000px] px-5 h-full'>
        <div className='h-full pb-10'>
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <main className='flex-1 h-full'>
          {activeTab === 'edit' && <ProfileEdit />}
          {activeTab === 'applied' && <AppliedPosts />}
        </main>
      </div>
    </div>
  );
}

export default MyPage;
