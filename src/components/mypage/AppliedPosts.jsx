import React from 'react';
import likedIcon from '../../assets/icons/heart.svg';
import commentIcon from '../../assets/icons/my_comment.png';
import RecruitLabel from '../common/RecruitLabel';
import CategoryLabel from '../common/CategoryLabel';

const AppliedPosts = () => {
  const postsData = [
    {
      id: 1,
      category: 'project',
      closed: false,
      title: '졸업작품 팀원 구합니다 (프론트엔드 1명)',
      content:
        '주제는 AI 기반 여행 코스 추천 서비스입니다. 현재 백엔드 2명, AI 1명 있고 리액트나 뷰 능숙하신 프론트 1분 모십니다.',
      author: '박눈송',
      time: '18:53',
      likes: 15,
      comments: 3,
    },
    {
      id: 2,
      category: 'study',
      closed: false,
      title: 'CS 전공지식 면접 대비 스터디 모집',
      content:
        '운영체제, 네트워크, 데이터베이스 위주로 꼬리질문 형식으로 모의면접 진행하실 분 3분 모집합니다.',
      author: '이눈송',
      time: '14:20',
      likes: 8,
      comments: 12,
    },
    {
      id: 3,
      category: 'project',
      closed: true,
      title: '백엔드 개발자로 플젝 참여하실 분 구해요',
      content:
        '주제는 감정 다이어리 서비스입니다. 현재 프론트엔드 2명, 백엔드 1명 있고 리액트나 뷰 능숙하신 프론트 1분 모십니다.',
      author: '최눈송',
      time: '12:11',
      likes: 24,
      comments: 5,
    },
  ];

  return (
    <div className='p-5 bg-grey-01 rounded-xl'>
      {postsData.map((post) => (
        <div
          key={post.id}
          className='bg-white rounded-xl p-5 mb-4 border border-white'>
          <div className='flex gap-2 mb-2'>
            <RecruitLabel closed={post.closed} />
            <CategoryLabel category={post.category} />
          </div>

          <h4 className='text-base font-bold text-black-100 mb-2'>
            {post.title}
          </h4>
          <p className='text-[13px] text-black-60 mb-4 truncate'>
            {post.content}
          </p>

          <div className='flex justify-between items-center text-xs text-black-40'>
            <span>
              {post.author} · {post.time}
            </span>
            <div className='flex gap-3'>
              <span className='flex items-center gap-1 text-black'>
                <img src={likedIcon} alt='liked icon' className='w-6 h-6' />
                {post.likes}
              </span>
              <span className='flex items-center gap-1 text-black'>
                <img
                  src={commentIcon}
                  alt='comment icon'
                  className='w-3.5 h-3.5'
                />{' '}
                {post.comments}
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* 페이지네이션 (모양만) */}
      <div className='flex-center gap-4 mt-6'>
        <button className='text-black-40 hover:text-main text-lg'>‹</button>
        <button className='w-8 h-8 rounded-lg bg-main text-white text-sm font-bold flex-center'>
          1
        </button>
        <button className='w-8 h-8 rounded-lg text-black-60 text-sm flex-center hover:bg-grey-02'>
          2
        </button>
        <button className='w-8 h-8 rounded-lg text-black-60 text-sm flex-center hover:bg-grey-02'>
          3
        </button>
        <button className='text-black-40 hover:text-main text-lg'>›</button>
      </div>
    </div>
  );
};

export default AppliedPosts;
