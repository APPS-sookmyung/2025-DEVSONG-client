import {useState} from 'react';
import CategoryOptions from '../components/postForm/CategoryOptions';
import Button from '../components/common/Button';
import {submitNewPost} from '../apis/posts';
import PostEditor from '../components/postForm/PostEditor';
import PostFormLayout from '../components/postForm/PostFormLayout';
import {useNavigate} from 'react-router-dom';

const PostForm = () => {
  const navigate = useNavigate();
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
      <main className='w-fit mx-auto py-6 md:pt-25'>
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

        <section className='hidden md:flex md:justify-center md:gap-6'>
          <Button
            variant='secondary'
            classname='w-22 px-4 py-2'
            onClick={() => navigate(-1)}>
            취소
          </Button>
          <Button
            variant='primary'
            classname='w-22 px-4 py-2'
            onClick={onPostSubmit}>
            등록
          </Button>
        </section>
      </main>
    </PostFormLayout>
  );
};

export default PostForm;
