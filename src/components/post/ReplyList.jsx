import Reply from './Reply';
import enter from '../../assets/icons/enter.svg';

const ReplyList = ({replies}) => {
  return (
    <div className='flex items-start gap-2 md:gap-3 md:mb-6'>
      <img className='md:w-6 md:h-6' src={enter} alt='엔터' />
      <div className='flex-1 flex flex-col gap-3 last:mb-7 md:last:mb-0'>
        {replies.map((reply) => (
          <Reply key={reply.commentId} {...reply} />
        ))}
      </div>
    </div>
  );
};

export default ReplyList;
