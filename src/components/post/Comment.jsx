const Comment = ({content}) => {
  return (
    <p className='mt-2 text-sm font-medium leading-[22.4px] md:text-base md:leading-[25.6px]'>
      {content}
    </p>
  );
};

export default Comment;
