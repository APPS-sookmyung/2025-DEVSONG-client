import ChatList from '@components/chat/ChatList';
import ChatRoom from '@components/chat/ChatRoom';
import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getChatRooms} from '@apis/chat';

const Chat = () => {
  const {roomId} = useParams();
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await getChatRooms();
        setRooms(response.data);
      } catch (error) {
        console.error('채팅방 목록 로딩 실패', error);
      }
    };
    fetchRooms();
  }, [roomId]); // 방 입장/퇴장 시 unreadCount 갱신

  // rooms가 로드된 후 selectedRoom 파생
  const selectedRoom = rooms.find((r) => String(r.roomId) === roomId) ?? null;

  return (
    <div
      className={`bg-grey-01 w-full lg:max-w-5xl md:max-w-3xl mx-auto h-svh md:h-200 md:my-12 md:rounded-3xl shadow-box overflow-hidden`}>
      <div className='flex gap-4 h-full md:p-6'>
        <section
          className={`${
            roomId ? 'hidden' : 'flex'
          } md:flex flex-col w-full md:w-1/3 h-full`}>
          <ChatList
            selectedId={roomId}
            rooms={rooms}
            onSelect={(room) => navigate(`/chat/${room.roomId}`)}
          />
        </section>

        <section
          className={`${
            roomId ? 'flex' : 'hidden'
          } md:flex flex-col flex-1 h-full`}>
          {roomId ? (
            selectedRoom ? (
              <ChatRoom
                key={roomId}
                roomId={roomId}
                onBack={() => navigate('/chat')}
                otherName={selectedRoom.otherName}
                otherUserId={selectedRoom.otherUserId}
              />
            ) : (
              <div className='flex-1 flex items-center justify-center bg-white rounded-[20px] text-black-40'>
                <span>로딩 중...</span>
              </div>
            )
          ) : (
            <div className='hidden md:flex-center flex-1 flex-col bg-white rounded-[20px] text-black-40'>
              <img
                src='/src/assets/images/logo.svg'
                alt='logo'
                className='w-50'
              />
              <span>대화할 상대를 선택해 주세요.</span>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Chat;
