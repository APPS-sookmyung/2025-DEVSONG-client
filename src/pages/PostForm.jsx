import {useState} from 'react';
import CategoryOptions from '../components/postForm/CategoryOptions';
import Button from '../components/common/Button';
import {submitNewPost, updatePost} from '../apis/posts';
import PostEditor from '../components/postForm/PostEditor';
import PostFormLayout from '../components/postForm/PostFormLayout';
import {useLocation, useNavigate} from 'react-router-dom';
import useGoBack from '@hooks/useGoBack';

const PostForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = useGoBack();
  const oldData = location.state || {};
  const [selectedCategory, setSelectedCategory] = useState(
    oldData.category || undefined
  );
  const [title, setTitle] = useState(oldData.title || '');
  const [content, setContent] = useState(oldData.content || '');
  const isUpdate = oldData.isUpdate || false;
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 폼 유효성 검사
  const validateForm = () => {
    if (!title.trim()) {
      alert('제목을 입력해주세요.');
      return false;
    }
    if (!content.trim()) {
      alert('내용을 입력해주세요.');
      return false;
    }
    if (!isUpdate && !selectedCategory) {
      alert('카테고리를 선택해주세요.');
      return false;
    }
    return true;
  };

  // 새 포스트 제출 핸들러
  const onSubmitPost = async () => {
    // 유효성 검사 및 중복 제출 방지
    if (!validateForm() || isSubmitting) return;
    setIsSubmitting(true);

    try {
      const response = await submitNewPost({
        title,
        content,
        category: selectedCategory,
      });
      navigate(`/post/${response.data.post_id}`);
    } catch (error) {
      console.error('포스트를 생성하지 못했습니다.', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 포스트 업데이트 핸들러
  const onUpdatePost = async () => {
    if (!validateForm() || isSubmitting) return;
    setIsSubmitting(true);

    const updatedPost = {
      postId: oldData.id,
      title: title,
      content: content,
    };

    try {
      const response = await updatePost(updatedPost);
      navigate(`/post/${response.data.id}`);
    } catch (error) {
      console.error('포스트를 업데이트하지 못했습니다.', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PostFormLayout
      onClick={isUpdate ? onUpdatePost : onSubmitPost}
      isUpdate={isUpdate}>
      <main className='w-fit mx-auto py-6 md:pt-25 md:pb-18'>
        <CategoryOptions
          selectedCategory={selectedCategory}
          onCategorySelect={(category) => setSelectedCategory(category)}
          disabled={isUpdate}
        />

        <PostEditor
          title={title}
          content={content}
          onTitleChange={(e) => setTitle(e.target.value)}
          onContentChange={(e) => setContent(e.target.value)}
        />

        <section className='hidden md:flex md:justify-center md:gap-6'>
          <Button variant='secondary' className='w-22' onClick={goBack}>
            취소
          </Button>
          <Button
            variant='primary'
            className='w-22'
            disabled={isSubmitting}
            onClick={isUpdate ? onUpdatePost : onSubmitPost}>
            {isSubmitting ? '처리 중...' : isUpdate ? '수정' : '등록'}
          </Button>
        </section>
      </main>
    </PostFormLayout>
  );
};

export default PostForm;
