import submit from '../../assets/icons/submitIcon.svg';

const CommentBar = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className='bg-white w-full fixed bottom-0 md:static md:bottom-auto px-6 pt-[10px] pb-[26px] md:rounded-b-3xl shadow-box'>
      <div className='bg-grey-01 w-full flex gap-1 py-3 pl-[14px] rounded-lg'>
        <input
          className='flex-1 text-sm leading-[22.4px] focus:outline-none'
          name='comment'
          type='text'
          placeholder='댓글을 입력하세요.'
        />
        <button type='submit' className='cursor-pointer'>
          <img className='pr-2' src={submit} alt='제출' />
        </button>
      </div>
    </form>
  );
};

export default CommentBar;
