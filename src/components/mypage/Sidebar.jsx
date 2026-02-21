import commentIcon from '@assets/icons/comment.svg';
import likedIcon from '@assets/icons/heart.svg';
import nextArrow from '@assets/icons/nextArrow.svg';
import editIcon from '@assets/icons/editIcon.svg';
import my from '@assets/icons/nav_my.svg';
import apply from '@assets/icons/apply.svg';

const MENU_OPTIONS = [
  {
    id: 'edit',
    label: '프로필 수정',
    icon: my,
  },
  {
    id: 'written',
    label: '내가 쓴 글',
    icon: editIcon,
  },
  {
    id: 'comments',
    label: '댓글 단 글',
    icon: commentIcon,
  },
  {
    id: 'liked',
    label: '좋아요한 글',
    icon: likedIcon,
  },
  {
    id: 'applied',
    label: '지원한 글',
    icon: apply,
  },
];

const Sidebar = ({
  activeTab,
  setActiveTab,
  username = '김눈송',
  studentId = '2520000',
  major = '한국어문학부',
}) => {
  return (
    <section className='bg-white w-71 min-w-71 h-fit flex flex-col items-center shrink-0 rounded-2xl px-3.5 pb-4 pt-11 shadow-box'>
      {/* 프로필 이미지 */}
      <div className='w-20 h-20 bg-[#4cd918] rounded-full mb-4'>
        {/* TODO: 프로필 이미지 */}
      </div>

      {/* 이름 */}
      <h2 className='text-2xl font-bold text-black-100 mb-5'>{username}</h2>

      {/* 학번과 전공*/}
      <div className='text-lg/[28.8px] text-black font-medium text-center mb-9'>
        <p>{studentId.slice(0, 2)}학번</p>
        <p>{major}</p>
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
