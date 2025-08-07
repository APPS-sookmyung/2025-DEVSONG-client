import PostCard from './PostCard';
import {posts} from './dummyPost';

const PostList = () => {
  return (
    <div className=''>
      <div className='flex-center flex-col gap-3 md:gap-5'>
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
