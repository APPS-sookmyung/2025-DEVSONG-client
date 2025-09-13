import {useState} from 'react';
import CategoryOptions from '../components/postForm/CategoryOptions';
import Button from '../components/common/Button';
import {submitPost} from '../apis/posts';
import PostEditor from '../components/postForm/PostEditor';
import PostFormLayout from '../components/postForm/PostFormLayout';

const PostForm = () => {
  const [post, setPost] = useState('글을 작성하세요');
  const [category, setCategory] = useState();

  const onSelectCategory = (category) => {
    setCategory(category);
  };

  const onChange = (content) => {
    setPost(content);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const newPost = {
      title: '해커톤 참여하실분',
      content: post,
      category: 'extra',
    };

    const response = await submitPost(newPost);
    console.log(response);
  };

  return (
    <PostFormLayout>
      <div className='flex-center flex-col py-6 md:pt-25'>
        <CategoryOptions onSelectCategory={onSelectCategory} />
        <PostEditor content={post} onChange={onChange} />
        <div className='hidden md:flex md:gap-6'>
          <Button
            label='취소'
            variant='secondaryColor'
            onClick={onSubmitHandler}
          />
          <Button
            label='등록'
            variant='primaryColor'
            onClick={onSubmitHandler}
          />
        </div>
      </div>
    </PostFormLayout>
  );
};

export default PostForm;
