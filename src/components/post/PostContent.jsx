import ContentPreview from '@components/common/ContentPreview';

const PostContent = ({content}) => {
  return (
    // <p className='whitespace-pre-wrap text-sm font-medium md:text-base'>
    //   {content}
    // </p>
    <ContentPreview size='none'>{content}</ContentPreview>
  );
};

export default PostContent;
