import {EditorContent, useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar';

const PostEditor = ({content, onChange}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    editorProps: {
      attributes: {
        class:
          'h-[303px] md:h-[511px] w-[345px] md:w-[800px] border rounded-xl bg-slate-50 py2-px-3',
      },
    },
    onUpdate: ({editor}) => {
      onChange(editor.getText());
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
