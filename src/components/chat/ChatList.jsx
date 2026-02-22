import ChatBox from './ChatBox';
import {dummy} from './dummy';

const ChatList = () => {
  return (
    <section className='flex flex-col gap-3 h-full w-1/3'>
      {dummy.map((box, index) => (
        <ChatBox
          key={index}
          {...box}
          className={`${index === 0 ? 'border border-main' : 'border-none'}`}
        />
      ))}
    </section>
  );
};

export default ChatList;
