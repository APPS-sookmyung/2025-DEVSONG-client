import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

const ContentPreview = ({children}) => {
  return (
    <div className='prose max-w-200 h-full overflow-y-scroll'>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]} breaks>
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default ContentPreview;
