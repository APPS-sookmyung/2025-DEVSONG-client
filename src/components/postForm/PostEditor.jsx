import {EditorContent, useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar';

const PostEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>여기에 글을 작성하세요.</p>',
    editorProps: {
      attributes: {
        class:
          'h-[303px] md:h-[511px] w-[345px] md:w-[800px] border rounded-xl bg-slate-50 py2-px-3',
      },
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default PostEditor;
