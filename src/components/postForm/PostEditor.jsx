import {useState} from 'react';
import TitleEditor from './TitleEditor';
import ContentEditor from './ContentEditor';

const PostEditor = ({title, content, onTitleChange, onContentChange}) => {
  return (
    <div className='md:w-156.5 lg:w-212.5 md:rounded-[28px] md:shadow-box p-6.25 md:my-10'>
      <TitleEditor title={title} onTitleChange={onTitleChange} />
      <ContentEditor content={content} onContentChange={onContentChange} />
    </div>
  );
};

export default PostEditor;
