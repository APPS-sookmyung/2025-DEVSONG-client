import {useEffect, useState, useRef} from 'react';
import MessageInput from '@components/common/MessageInput';
import back from '@assets/icons/back.svg';
import document from '@assets/icons/document.svg';
import {Client} from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import {getChatMessages} from '@apis/chat';
import {useNavigate} from 'react-router-dom';

const ChatRoom = ({roomId, onBack, otherName, otherUserId}) => {
  const [messages, setMessages] = useState([]);
  const client = useRef(null);
  const scrollRef = useRef();
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  const roomCreatedDate =
    messages.length > 0
      ? new Date(messages[0].createdAt).toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : null;

  // 과거 메세지 로드 및 웹소켓 연결
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getChatMessages(roomId);
        setMessages(response.data);
      } catch (error) {
        console.error('메시지 불러오기 실패:', error);
      }
    };

    fetchMessages();

    // 웹소켓 설정
    client.current = new Client({
      webSocketFactory: () => {
        return new SockJS(`${import.meta.env.VITE_WS_URL}?token=${token}`);
      },
      connectHeaders: {Authorization: `Bearer ${token}`},
      onConnect: () => {
        client.current.subscribe(`/topic/chat/room/${roomId}`, (message) => {
          const newMessage = JSON.parse(message.body);
          setMessages((prev) => [...prev, newMessage]);
        });
      },
    });
    client.current.activate();

    return () => client.current.deactivate();
  }, [roomId, token]);

  // 새 메세지 수신 시 스크롤 하단 이동
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // 메세지 전송
  const handleSendMessage = (msg) => {
    if (client.current && client.current.connected) {
      client.current.publish({
        destination: '/app/chat/send',
        body: JSON.stringify({roomId: roomId, content: msg}),
      });
      return true;
    }
    return false;
  };

  return (
    <section className='flex-1 flex flex-col w-full rounded-[20px] bg-white overflow-hidden'>
      <header className='flex items-center justify-between p-5 border-b border-grey-01'>
        <button onClick={onBack} className='cursor-pointer md:hidden'>
          <img src={back} alt='back' className='w-5 h-5' />
        </button>
        <div className='text-center flex-1 flex flex-col items-center gap-1'>
          <h2 className='font-bold text-base md:text-lg lg:text-xl'>
            {otherName ?? ''}
          </h2>
        </div>
        <button
          className='flex-center w-7 h-7 rounded-sm cursor-pointer bg-grey-01'
          onClick={() => navigate(`/resume/0/${otherUserId}`)}>
          <img src={document} alt='이력서' className='w-6 h-6' />
        </button>
      </header>

      <div
        className='flex-1 overflow-y-auto p-6 flex flex-col gap-4'
        ref={scrollRef}>
        {roomCreatedDate && (
          <p className='text-center text-xs text-black-40'>{roomCreatedDate}</p>
        )}
        {messages.map((msg) => {
          const isMine = msg.senderId !== otherUserId;
          return (
            <div
              key={msg.messageId}
              className={`flex ${
                isMine ? 'flex-row-reverse' : 'flex-row'
              } items-end gap-2`}>
              <div
                className={`px-4 py-2.5 rounded-lg max-w-[70%] ${
                  isMine ? 'bg-main text-white' : 'bg-grey-02 text-black'
                }`}>
                <span className='text-sm'>{msg.content}</span>
              </div>
              <span className='text-[10px] text-black-60 mb-1'>
                {new Date(msg.createdAt).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          );
        })}
      </div>

      <div className='p-4 border-t border-grey-01'>
        <MessageInput variant='chat' onSubmitMessage={handleSendMessage} />
      </div>
    </section>
  );
};

export default ChatRoom;
