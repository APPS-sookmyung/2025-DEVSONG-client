import PostContent from '../../components/post/PostContent';
import PostHeader from '../../components/post/PostHeader';
import {post} from '../../dummy/post';
import PostActions from '../../components/post/PostActions';
import CommentSection from '../../components/post/CommentSection';
import CommentBar from '../../components/post/CommentBar';

const PostLayout = () => {
  const userId = 123;
  const isAuthor = post.authorId === userId;
  return (
    <div className='mx-auto bg-white md:shadow-box md:rounded-3xl md:w-180 lg:w-212.5 md:mt-10'>
      <div className='w-full px-6 py-4 md:px-11 md:py-9'>
        <PostHeader
          title={post.title}
          author={post.username}
          major={post.major}
          studentId={post.studentId}
          category={post.category}
          closed={post.closed}
          isAuthor={isAuthor}
        />
        <PostContent content={post.content} />
        <PostActions
          isAuthor={isAuthor}
          like={post.like}
          comment={post.comment}
        />
        <CommentSection comments={post.comments} />
      </div>
      <CommentBar />
    </div>
  );
};

export default PostLayout;
