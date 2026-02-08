import {formatDate} from '../../lib/formateDate';

const Reply = ({username, content, createdAt}) => {
  return (
    <div className='flex flex-col gap-2.25 bg-grey-01 p-3 md:px-6 md:py-5 rounded-xl'>
      <div className='text-xs font-medium text-black-40'>{`${username} ${formatDate(
        createdAt
      )}`}</div>
      <div className='text-sm md:text-base font-medium'>{content}</div>
    </div>
  );
};

export default Reply;
