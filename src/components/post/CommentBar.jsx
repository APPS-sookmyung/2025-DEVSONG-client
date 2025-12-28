import {useState} from 'react';
import submit from '../../assets/icons/submitIcon.svg';

const CommentBar = ({onAddComment}) => {
  const [comment, setComment] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    onAddComment(comment);
    setComment('');
  };

  return (
    <div className='fixed bottom-0 md:static w-full shadow-box md:shadow-none'>
      <form
        className='bg-grey-01 mt-2.5 mb-6.5 md:my-9 w-full flex gap-1 py-3 pl-[14px] rounded-lg'
        onSubmit={onSubmitHandler}>
        <input
          className='flex-1 text-sm leading-[22.4px] focus:outline-none'
          name='comment'
          type='text'
          placeholder='댓글을 입력하세요.'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type='submit' className='cursor-pointer'>
          <img className='pr-2' src={submit} alt='제출' />
        </button>
      </form>
    </div>
  );
};

export default CommentBar;
