const ChatRoom = () => {
  return (
    <section className='flex-1 w-2/3 rounded-[20px] bg-white px-6'>
      <header className='flex-center flex-col p-6 gap-2 text-center'>
        <h2 className='text-xl'>윤예솔</h2>
        <p className='text-xs text-black-60'>2025년 12월 27일</p>
      </header>
      <section className='flex items-end gap-2'>
        <div className='px-4 py-3 bg-grey-02 rounded-lg inline-flex justify-center items-center gap-2.5'>
          <span className='font-medium text-sm'>
            안녕하세요? 이력서 보고 연락드립니다.
          </span>
        </div>
        <span className='text-[10px] text-black-60'>3:21</span>
      </section>
    </section>
  );
};

export default ChatRoom;
