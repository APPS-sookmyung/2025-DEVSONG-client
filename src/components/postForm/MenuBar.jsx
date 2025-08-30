import {
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
} from 'lucide-react';
import {Toggle} from '../ui/toggle';

const MenuBar = ({editor}) => {
  if (!editor) {
    return null;
  }

  const Options = [
    {
      icon: <Heading1 className='size-4' />,
      onClick: () => editor.chain().focus().toggleHeading({level: 1}).run(),
      selected: editor.isActive('heading', {level: 1}),
    },
    {
      icon: <Heading2 className='size-4' />,
      onClick: () => editor.chain().focus().toggleHeading({level: 2}).run(),
      selected: editor.isActive('heading', {level: 2}),
    },
    {
      icon: <Heading3 className='size-4' />,
      onClick: () => editor.chain().focus().toggleHeading({level: 3}).run(),
      selected: editor.isActive('heading', {level: 3}),
    },
    {
      icon: <Bold className='size-4' />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      selected: editor.isActive('bold'),
    },
    {
      icon: <Italic className='size-4' />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      selected: editor.isActive('italic'),
    },
    {
      icon: <Strikethrough className='size-4' />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      selected: editor.isActive('strike'),
    },
    {
      icon: <List className='size-4' />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      selected: editor.isActive('bulletList'),
    },
    {
      icon: <ListOrdered className='size-4' />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      selected: editor.isActive('orderedList'),
    },
  ];

  return (
    <div>
      {Options.map((option, index) => (
        <Toggle
          key={index}
          pressed={option.selected}
          onPressedChange={option.onClick}>
          {option.icon}
        </Toggle>
      ))}
    </div>
  );
};

export default MenuBar;
