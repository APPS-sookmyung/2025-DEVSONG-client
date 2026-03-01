import {useState} from 'react';
import submit from '../../assets/icons/submitIcon.svg';

const VARIANTS = {
  post: {
    wrapper:
      'fixed bottom-0 md:static w-full bg-white md:bg-transparent shadow-box md:shadow-none md:border-t md:border-grey-02',
    form: 'bg-grey-01 mt-2.5 mb-6.5 md:my-9 w-full flex gap-1 py-3 pl-3.5 rounded-lg',
    placeholder: '댓글을 입력하세요.',
  },
  chat: {
    wrapper: 'w-full',
    form: 'bg-grey-01 w-full flex gap-1 py-3 pl-3.5 rounded-lg',
    placeholder: '메시지를 입력하세요.',
  },
};

const MessageInput = ({onSubmitMessage, variant = 'post'}) => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {wrapper, form, placeholder} = VARIANTS[variant] ?? VARIANTS.post;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const success = await onSubmitMessage(message);
      if (success) {
        setMessage('');
      }
    } catch (error) {
      console.error('전송 실패:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={wrapper}>
      <form autoComplete='off' className={form} onSubmit={onSubmit}>
        <input
          className='flex-1 text-sm leading-[22.4px] focus:outline-none bg-transparent'
          name='message'
          type='text'
          placeholder={placeholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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

export default MessageInput;
