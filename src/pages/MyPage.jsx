import {useState, useEffect} from 'react';
import Sidebar from '@components/mypage/Sidebar';
import ProfileEdit from '@components/mypage/ProfileEdit';
import PostList from '@components/common/PostList';
import {useMediaQuery} from 'react-responsive';
import MobileMyPage from '@components/mypage/MobileMyPage';
import {
  getMyPosts,
  getMyComments,
  getMyLikes,
  getMyApplies,
} from '../apis/mypage';

function MyPage() {
  const [activeTab, setActiveTab] = useState('edit');
  const isMobile = useMediaQuery({query: '(max-width: 767px)'});
  const [apiPosts, setApiPosts] = useState([]);

  useEffect(() => {
    if (activeTab === 'edit') return;

    const fetchData = async () => {
      try {
        let data = [];

        if (activeTab === 'written') {
          data = await getMyPosts();
        } else if (activeTab === 'comments') {
          data = await getMyComments();
        } else if (activeTab === 'liked') {
          data = await getMyLikes();
        } else if (activeTab === 'applied') {
          data = await getMyApplies();
        }

        setApiPosts(data ?? []);
      } catch (error) {
        console.error('마이페이지 API 실패:', error);
        setApiPosts([]);
      }
    };

    fetchData();
  }, [activeTab]);

  // 모바일 버전 렌더링
  if (isMobile) {
    return (
      <MobileMyPage
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        posts={apiPosts}
      />
    );
  }

  // 데스크탑 버전 렌더링
  return (
    <div className='w-full h-full bg-background my-12 md:px-10'>
      <div className='flex justify-center gap-10'>
        {/* 사이드바 */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* 콘텐츠 영역 */}
        {activeTab === 'edit' ? (
          <ProfileEdit />
        ) : (
          <div className='w-full max-w-133.5 h-179.5 p-6 bg-grey-01 shadow-box rounded-3xl overflow-y-auto'>
            <PostList posts={apiPosts} cardVariant='flex' />
          </div>
        )}
      </div>
    </div>
  );
}

export default MyPage;
