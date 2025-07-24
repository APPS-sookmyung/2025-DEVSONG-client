import PostCard from './PostCard';

const PostList = () => {
  return (
    <div className='flex flex-col items-center my-13 gap-5'>
      <PostCard />
      <PostCard />
    </div>
  );
};

export default PostList;
