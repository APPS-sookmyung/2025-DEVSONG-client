import profil from '@assets/image/profil.svg';

const ChatBox = ({username, latestMessage, className}) => {
  return (
    <div
      className={`${className} flex w-full h-24 bg-white rounded-[20px] px-5 py-5.75 items-center shadow-box`}>
      <div className='flex-1 flex items-center gap-5 min-w-0'>
        <img
          src={profil}
          alt='프로필'
          className='w-15 h-15 object-cover shrink-0'
        />

        <div className='flex flex-col items-start justify-center min-w-0'>
          <h2 className='font-semibold text-base w-full truncate'>
            {username}
          </h2>
          <p className='font-medium text-xs truncate w-full'>{latestMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
