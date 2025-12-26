import PostHeader from '@components/post/PostHeader';
import PostResumeHeader from '../layout/PostResumeHeader';
import PostContent from '@components/post/PostContent';
import PostActions from '@components/post/PostActions';
import CommentSection from '@components/post/CommentSection';
import CommentBar from '@components/post/CommentBar';
import {useEffect, useState} from 'react';
import {getPostDetail} from '@apis/posts';
import {useParams} from 'react-router-dom';
import PostLayout from '@components/post/PostLayout';

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
      <PostLayout>
        <div className='relative flex flex-col w-full min-h-screen *:px-6 *:md:px-11'>
          <section className='flex flex-col flex-1 min-h-0 md:h-[850px] overflow-y-auto py-4 md:py-9'>
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
        </div>
      </PostLayout>
    </>
  );
};

export default Post;
