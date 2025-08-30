const MenuBar = ({editor}) => {
  if (!editor) {
    return null;
  }

  return (
    <div className='control-group'>
      <div className='flex gap-3'>
        <button
          onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
          className={`${
            editor.isActive('heading', {level: 1}) ? 'is-active' : ''
          }`}>
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
          className={`${
            editor.isActive('heading', {level: 2}) ? 'is-active' : ''
          }`}>
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({level: 3}).run()}
          className={editor.isActive('heading', {level: 3}) ? 'is-active' : ''}>
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}>
          Paragraph
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}>
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}>
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}>
          Strike
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
