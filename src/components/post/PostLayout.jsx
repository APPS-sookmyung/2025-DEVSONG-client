import PostContent from '../../components/post/PostContent';
import PostHeader from '../../components/post/PostHeader';
import PostActions from '../../components/post/PostActions';
import CommentSection from '../../components/post/CommentSection';
import CommentBar from '../../components/post/CommentBar';
import {useEffect, useState} from 'react';
import {getPostDetail} from '../../apis/posts';

const PostLayout = () => {
  const id = 1;
  const userId = 123;
  const [postData, setPostData] = useState({});

  const fetchPostDetail = async () => {
    const response = await getPostDetail({post_id: id});
    setPostData(response.data);
  };

  useEffect(() => {
    fetchPostDetail();
  }, []);

  return (
    <div className='mx-auto bg-white md:shadow-box md:rounded-3xl md:w-180 lg:w-212.5 md:mt-10'>
      <div className='w-full px-6 py-4 md:px-11 md:py-9'>
        <PostHeader
          title={postData.title}
          author={postData.username}
          major={postData.major}
          studentId={postData.studentId}
          category={postData.category}
          closed={postData.closed}
          isAuthor={postData.authorId === userId}
        />
        <PostContent content={postData.content} />
        <PostActions
          isAuthor={postData.authorId === userId}
          like={postData.like}
          comment={postData.comment}
        />
        <CommentSection comments={postData.comments} />
      </div>
      <CommentBar />
    </div>
  );
};

export default PostLayout;
