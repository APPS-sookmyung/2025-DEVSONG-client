import {useState} from 'react';
import submit from '../../assets/icons/submitIcon.svg';

const CommentBar = ({onAddComment}) => {
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const success = await onAddComment(comment);
      if (success) {
        setComment('');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='fixed bottom-0 md:static w-full shadow-box md:shadow-none'>
      <form
        autoComplete='off'
        className='bg-grey-01 mt-2.5 mb-6.5 md:my-9 w-full flex gap-1 py-3 pl-3.5 rounded-lg'
        onSubmit={onSubmit}>
        <input
          className='flex-1 text-sm leading-[22.4px] focus:outline-none'
          name='comment'
          type='text'
          placeholder='댓글을 입력하세요.'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          type='submit'
          className='cursor-pointer'
          disabled={isSubmitting}>
          <img className='pr-2' src={submit} alt='제출' />
        </button>
      </form>
    </div>
  );
};

export default CommentBar;
