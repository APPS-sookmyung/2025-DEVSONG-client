import {useState} from 'react';
import TitleEditor from './TitleEditor';
import ContentEditor from './ContentEditor';

const PostEditor = ({content, onChange}) => {
  const [title, setTitle] = useState(``);
  const [markdownText, setMarkdownText] = useState(``);

  const handleContentChange = (event) => {
    setMarkdownText(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className='md:w-156.5 lg:w-212.5 md:rounded-[28px] md:shadow-box p-[25px] md:my-10'>
      <TitleEditor title={title} handleTitleChange={handleTitleChange} />
      <ContentEditor
        content={markdownText}
        handleContentChange={handleContentChange}
      />
    </div>
  );
};

export default PostEditor;
