import {useState} from 'react';
import CategoryOptions from '../components/postForm/CategoryOptions';
import PostEditor from '../components/postForm/postEditor';
import Button from '../components/common/Button';
import {submitPost} from '../apis/posts';

const PostForm = () => {
  const [post, setPost] = useState('글을 작성하세요');
  const onChange = (content) => {
    setPost(content);
  };

  const onSubmitHandler = async () => {
    const newPost = {
      title: '제목',
      content: post,
      category: '',
    };

    const response = await submitPost(newPost);
  };

  return (
    <div className=''>
      <CategoryOptions />
      <PostEditor content={post} onChange={onChange} />
      <Button label='등록' onClick={onSubmitHandler} />
    </div>
  );
};

export default PostForm;
