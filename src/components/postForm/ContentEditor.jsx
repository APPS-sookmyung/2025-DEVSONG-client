import {useState} from 'react';
import ContentPreview from '@components/common/ContentPreview';
import Button from '@components/common/Button';

const ContentEditor = ({content, onContentChange, isModal}) => {
  const [previewMode, setPreviewMode] = useState(false);

  const handleClick = () => {
    setPreviewMode(!previewMode);
  };

  const variant =
    isModal === undefined
      ? 'md:w-144 md:h-102 lg:w-200 lg:h-128'
      : 'md:w-133.5 md:h-77 md:p-6';

  return (
    <div>
      <div className={`bg-white rounded-xl w-86.5 h-76 p-5 ${variant}`}>
        {!previewMode ? (
          <textarea
            value={content}
            onChange={onContentChange}
            placeholder='마크다운을 이용해서 편리하게 글을 작성할 수 있어요.'
            className='w-full h-full whitespace-pre-wrap resize-none focus:outline-none'
          />
        ) : (
          <ContentPreview>{content}</ContentPreview>
        )}
      </div>
      <div className='flex justify-end py-4'>
        <Button
          onClick={handleClick}
          variant={`${previewMode ? 'secondary' : 'primary'}`}>
          {previewMode ? '편집하기' : '미리보기'}
        </Button>
      </div>
    </div>
  );
};
export default ContentEditor;
