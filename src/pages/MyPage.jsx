import {useState} from 'react';
import Sidebar from '@components/mypage/Sidebar';
import ProfileEdit from '@components/mypage/ProfileEdit';
import PostList from '@components/common/PostList';
import {useMediaQuery} from 'react-responsive';
import MobileMyPage from '@components/mypage/MobileMyPage';

const dummyPosts = [
  {
    postId: 4,
    title: '교내 해커톤 참가하실 분 구해요 (디자이너/프론트/백 모두 환영)',
    preview: '다음 달에 열리는 교내 해커톤 참가하려고 합니다. 아이디어는 자...',
    category: 'extra',
    username: '박눈송',
    createdAt: '2025-09-19 12:13:50',
    closed: false,
    like: 1,
    comment: 1,
  },
  {
    postId: 7,
    title: '다들 요즘 무슨 언어 공부하시나요? (Python vs Java vs Rust)',
    preview: '요즘 코테 때문에 Python을 계속 쓰고 있는데, Java로도...',
    category: 'free',
    username: '이눈송',
    createdAt: '2025-09-19 12:15:20',
    closed: false,
    like: 1,
    comment: 2,
  },
  {
    postId: 5,
    title: '네이버 부스트캠프 AI Tech 지원 후기 + 준비 팁',
    preview: '이번 여름에 네이버 부스트캠프 AI Tech 지원해서 최종 합격...',
    category: 'info',
    username: '박눈송',
    createdAt: '2025-09-19 12:14:22',
    closed: false,
    like: 0,
    comment: 1,
  },
  {
    postId: 6,
    title: '네이버 부스트캠프 AI Tech 지원 후기 + 준비 팁',
    preview: '이번 여름에 네이버 부스트캠프 AI Tech 지원해서 최종 합격...',
    category: 'info',
    username: '박눈송',
    createdAt: '2025-09-19 12:14:22',
    closed: false,
    like: 0,
    comment: 1,
  },
  {
    postId: 10,
    title: '네이버 부스트캠프 AI Tech 지원 후기 + 준비 팁',
    preview: '이번 여름에 네이버 부스트캠프 AI Tech 지원해서 최종 합격...',
    category: 'info',
    username: '박눈송',
    createdAt: '2025-09-19 12:14:22',
    closed: false,
    like: 0,
    comment: 1,
  },
];

function MyPage() {
  const [activeTab, setActiveTab] = useState('edit');
  const isMobile = useMediaQuery({query: '(max-width: 767px)'});

  // 모바일 버전 렌더링
  if (isMobile) {
    return (
      <MobileMyPage
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        dummyPosts={dummyPosts}
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
            {activeTab === 'written' && (
              <PostList posts={dummyPosts} cardVariant='flex' />
            )}
            {activeTab === 'comments' && (
              <PostList posts={dummyPosts} cardVariant='flex' />
            )}
            {activeTab === 'liked' && (
              <PostList posts={dummyPosts} cardVariant='flex' />
            )}
            {activeTab === 'applied' && (
              <PostList posts={dummyPosts} cardVariant='flex' />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyPage;
