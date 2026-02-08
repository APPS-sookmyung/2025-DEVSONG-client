import {useState} from 'react';
import CategoryOptions from '../components/postForm/CategoryOptions';
import Button from '../components/common/Button';
import {submitNewPost, updatePost} from '../apis/posts';
import PostEditor from '../components/postForm/PostEditor';
import PostFormLayout from '../components/postForm/PostFormLayout';
import {useNavigate} from 'react-router-dom';

function removeLocalStorage() {
  localStorage.removeItem('id');
  localStorage.removeItem('isUpdate');
  localStorage.removeItem('title');
  localStorage.removeItem('content');
  localStorage.removeItem('category');
}

const PostForm = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem('category') || undefined
  );
  const [title, setTitle] = useState(localStorage.getItem('title') || '');
  const [content, setContent] = useState(localStorage.getItem('content') || '');
  const isUpdate = Boolean(localStorage.getItem('isUpdate')) || false;

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
      navigate(`/post/${response.data.post_id}`);
    } catch (error) {
      console.error('포스트를 생성하지 못했습니다.', error);
    }
  };

  const onPostUpdate = async () => {
    const updatedPost = {
      postId: localStorage.getItem('id'),
      title: title,
      content: content,
    };

    try {
      const response = await updatePost(updatedPost);
      removeLocalStorage();
      navigate(`/post/${response.data.id}`);
    } catch (error) {
      console.error('포스트를 업데이트하지 못했습니다.', error);
    }
  };

  const handleBack = () => {
    removeLocalStorage();
    navigate(-1);
  };

  return (
    <PostFormLayout onClick={onPostSubmit}>
      <main className='w-fit mx-auto py-6 md:pt-25 md:pb-18'>
        <CategoryOptions
          selectedCategory={selectedCategory}
          onCategorySelect={onCategorySelect}
          disabled={isUpdate}
        />

        <PostEditor
          title={title}
          content={content}
          onTitleChange={onTitleChange}
          onContentChange={onContentChange}
        />

        <section className='hidden md:flex md:justify-center md:gap-6'>
          <Button variant='secondary' className='w-22' onClick={handleBack}>
            취소
          </Button>
          <Button
            variant='primary'
            className='w-22'
            onClick={isUpdate ? onPostUpdate : onPostSubmit}>
            {isUpdate === true ? '수정' : '등록'}
          </Button>
        </section>
      </main>
    </PostFormLayout>
  );
};

export default PostForm;
