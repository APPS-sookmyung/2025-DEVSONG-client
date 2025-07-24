const PostCard = () => {
  return (
    <div className='flex flex-col justify-evenly w-212 h-55 border-0 rounded-xl px-5 bg-white'>
      <span></span>
      <span></span>
      <div className='font-medium'>
        <h3 className='text-xl font-bold'>프로젝트 팀원 모집 중</h3>
        <p className='text-lg text-[#747577]'>
          안녕하세요, iOS 앱 개발 프로젝트 팀원을 모집합니다. 안녕하세요, iOS 앱
          개발 프로젝트 팀원을 모집합니다. 안녕하세요, iOS 앱 개발 프로젝트
          팀원을 모집합니다. 안녕하세요, iOS 앱 개발 프로젝트 팀원을 모집합니다.
          안녕하세요,...
        </p>
      </div>
      <div className='flex justify-between text-base text-[#A3A3A4]'>
        <div className='flex gap-2'>
          <span>윤경빈</span>
          <span>18:53</span>
        </div>
        <div className='flex gap-2'>
          <span>15</span>
          <span>13</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
