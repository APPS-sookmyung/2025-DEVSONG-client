import ContentPreview from '@components/common/ContentPreview';

const PostContent = ({content}) => {
  return (
    <div>
      <ContentPreview size='none'>{content}</ContentPreview>
    </div>
  );
};

export default PostContent;
