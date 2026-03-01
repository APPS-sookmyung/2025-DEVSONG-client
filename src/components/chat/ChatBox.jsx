import profile from '@assets/image/profil.svg';

const ChatBox = ({
  username,
  latestMessage,
  isActive,
  onClick,
  unreadCount,
  profileImg,
}) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer shadow-box md:shadow-none transition-all flex w-full h-20 md:h-22 lg:h-24 bg-white rounded-xl md:rounded-[20px] px-5 items-center border 
      ${
        isActive
          ? 'border-main-60 bg-main-5'
          : 'border-transparent hover:border-grey-02'
      }`}>
      <div className='flex-1 flex items-center gap-4 min-w-0'>
        <div className='w-12 h-12 md:w-15 md:h-15 rounded-full bg-grey-02 shrink-0 overflow-hidden'>
          <img
            src={profileImg || profile}
            alt='profile'
            className='w-full h-full object-cover'
          />
        </div>

        <div className='flex flex-col flex-1 min-w-0'>
          <h2 className='font-semibold text-sm md:text-base lg:text-lg truncate'>
            {username}
          </h2>
          <p className='text-black-60 text-xs md:text-sm lg:text-base truncate'>
            {latestMessage}
          </p>
        </div>

        {unreadCount > 0 && (
          <div className='w-5 h-5 bg-red-500 rounded-full flex items-center justify-center shrink-0'>
            <span className='text-white text-[10px] font-bold'>
              {unreadCount}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
