import {useState} from 'react';
import CategoryOptions from '../components/postForm/CategoryOptions';
import Button from '../components/common/Button';
import {submitNewPost} from '../apis/posts';
import PostEditor from '../components/postForm/PostEditor';
import PostFormLayout from '../components/postForm/PostFormLayout';

const PostForm = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [title, setTitle] = useState(``);
  const [content, setContent] = useState(``);

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const onPostSubmit = async () => {
    const newPost = {
      title: title,
      content: content,
      category: selectedCategory,
    };

    try {
      const response = await submitNewPost(newPost);
    } catch (error) {
      console.error('포스트를 생성하지 못했습니다.', error);
    }
  };

  return (
    <PostFormLayout>
      <div className='w-fit mx-auto py-6 md:pt-25'>
        <CategoryOptions
          selectedCategory={selectedCategory}
          onCategorySelect={onCategorySelect}
        />
        <PostEditor
          title={title}
          content={content}
          onTitleChange={onTitleChange}
          onContentChange={onContentChange}
        />
        <div className='hidden md:flex md:justify-center md:gap-6'>
          <Button label='취소' variant='secondaryColor' />
          <Button label='등록' variant='primaryColor' onClick={onPostSubmit} />
        </div>
      </div>
    </PostFormLayout>
  );
};

export default PostForm;
