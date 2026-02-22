import ChatLayout from '@components/chat/ChatLayout';
import ChatList from '@components/chat/ChatList';
import ChatRoom from '@components/chat/ChatRoom';

const Chat = () => {
  return (
    <main className='bg-grey-01 w-screen max-w-5xl mx-auto h-screen my-12 rounded-3xl shadow-box'>
      <div className='flex-1 flex gap-4 h-full p-6'>
        <ChatList />
        <ChatRoom />
      </div>
    </main>
  );
};

export default Chat;
