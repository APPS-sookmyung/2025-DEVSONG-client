import PostContent from '../../components/post/PostContent';
import PostHeader from '../../components/post/PostHeader';
import {postData} from '../../components/post/dummy';
import PostActions from '../../components/post/PostActions';
import CommentSection from '../../components/post/CommentSection';
import CommentBar from '../../components/post/CommentBar';

const PostLayout = () => {
  const userId = 123;
  const isAuthor = postData.authorId === userId;
  return (
    <div className='mx-auto md:bg-white md:shadow-box md:rounded-3xl md:w-180 lg:w-212.5 md:mt-10'>
      <div className='w-full px-6 py-4 md:px-11 md:py-9'>
        <PostHeader
          title={postData.title}
          author={postData.username}
          major={postData.major}
          studentId={postData.studentId}
          category={postData.category}
          closed={postData.closed}
          isAuthor={isAuthor}
        />
        <PostContent content={postData.content} />
        <PostActions
          isAuthor={isAuthor}
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
