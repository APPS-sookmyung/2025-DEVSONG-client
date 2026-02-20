import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

const ContentPreview = ({children, size = 'default', className = ''}) => {
  const sizes = {
    default: 'max-w-200 h-full',
    none: '',
  };
  return (
    <div className={`prose ${sizes[size]} ${className} overflow-y-scroll`}>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]} breaks>
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default ContentPreview;
