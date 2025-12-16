import PostHeader from '@components/post/PostHeader';
// import PostLayout from '../components/post/PostLayout';
import PostResumeHeader from '../layout/PostResumeHeader';
import PostContent from '@components/post/PostContent';
import PostActions from '@components/post/PostActions';
import CommentSection from '@components/post/CommentSection';
import CommentBar from '@components/post/CommentBar';
import {useEffect, useState} from 'react';
import {getPostDetail} from '@apis/posts';
import {useParams} from 'react-router-dom';

const Post = () => {
  const {id} = useParams(); // post id 받아오기
  const userId = 123;
  const authorId = 124;

  const [postData, setPostData] = useState({});

  const fetchPostDetail = async () => {
    const response = await getPostDetail(id);
    setPostData(response.data);
  };

  useEffect(() => {
    fetchPostDetail();
  }, []);

  return (
    <>
      <PostResumeHeader />
      <main className='mx-auto bg-white md:shadow-box md:rounded-3xl md:w-180 lg:w-212.5 md:mt-10'>
        <section className='w-full px-6 py-4 md:px-11 md:py-9'>
          <PostHeader
            title={postData.title}
            author={postData.username}
            major={postData.major}
            studentId={postData.studentId}
            category={postData.category}
            closed={postData.closed}
            isAuthor={authorId === userId}
          />
          <PostContent content={postData.content} />
          <PostActions
            isAuthor={authorId === userId}
            like={postData.like}
            comment={postData.comment}
          />
          <CommentSection comments={postData.comments} />
        </section>
        <CommentBar />
      </main>
    </>
  );
};

export default Post;
