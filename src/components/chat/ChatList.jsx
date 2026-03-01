import ChatBox from './ChatBox';

const ChatList = ({selectedId, rooms, onSelect}) => {
  return (
    <section className='flex flex-col gap-3 w-full overflow-y-auto'>
      <h1 className='bg-white md:hidden text-center py-6 font-semibold text-base/normal'>
        채팅 목록
      </h1>

      <div className='px-6 pb-28 md:pb-0 flex flex-col gap-3 md:w-full md:px-0'>
        {rooms.map((room) => (
          <ChatBox
            key={room.roomId}
            username={room.otherName}
            latestMessage={room.lastMessageContent}
            profileImg={room.otherProfileImageUrl}
            unreadCount={room.unreadCount}
            isActive={Number(selectedId) === room.roomId}
            onClick={() => onSelect(room)}
          />
        ))}
      </div>
    </section>
  );
};

export default ChatList;
