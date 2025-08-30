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

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const newPost = {
      title: '해커톤 참여하실분',
      content: post,
      author: '이눈송',
      createdAt: '2025-08-30 13:10:24',
      closed: true,
      category: 'extra',
      countLike: 1,
      countComment: 1,
      comment: 0,
      comments: [],
    };

    const response = await submitPost(newPost);
    console.log(response);
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
