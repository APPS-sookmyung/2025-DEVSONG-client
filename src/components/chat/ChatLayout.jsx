import React from 'react';

const ChatLayout = ({children}) => {
  return (
    <div className='w-full min-h-screen mx-auto py-12'>
      <section className='bg-grey-01 p-6.25 rounded-[36px]'>{children}</section>
    </div>
  );
};

export default ChatLayout;
