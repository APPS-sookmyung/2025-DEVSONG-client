import {useEffect, useState, useRef} from 'react';
import MessageInput from '@components/common/MessageInput';
import back from '@assets/icons/back.svg';
import {Client} from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import {getChatMessages} from '@apis/chat';

const ChatRoom = ({roomId, onBack, otherName, otherUserId}) => {
  const [messages, setMessages] = useState([]);
  const client = useRef(null);
  const scrollRef = useRef();
  const token = localStorage.getItem('accessToken');

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
        <button onClick={onBack} className='md:hidden text-xl'>
          <img src={back} alt='back' className='w-5 h-5' />
        </button>
        <div className='text-center flex-1 flex flex-col items-center gap-1'>
          <h2 className='font-bold text-base md:text-xl'>{otherName ?? ''}</h2>
        </div>
      </header>

      <div
        className='flex-1 overflow-y-auto p-6 flex flex-col gap-4'
        ref={scrollRef}>
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
