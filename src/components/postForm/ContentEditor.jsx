import {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Button from '../common/Button';

const ContentEditor = ({content, handleContentChange}) => {
  const [previewMode, setPreviewMode] = useState(false);

  const handleClick = () => {
    setPreviewMode(!previewMode);
  };

  return (
    <div>
      <div className='bg-white w-86.5 h-76 rounded-xl p-5 md:w-144 md:h-102 lg:w-200 lg:h-128'>
        {!previewMode ? (
          <textarea
            value={content}
            onChange={handleContentChange}
            placeholder='마크다운을 이용해서 편리하게 글을 작성할 수 있어요.'
            className='w-full h-full whitespace-pre-wrap resize-none focus:outline-none'
          />
        ) : (
          <div className='prose overflow-y-scroll'>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        )}
      </div>
      <div className='flex justify-end py-4'>
        <Button onClick={handleClick} label='미리보기' />
      </div>
    </div>
  );
};

export default ContentEditor;
