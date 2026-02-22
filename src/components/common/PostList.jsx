import PostCard from './PostCard';

const PostList = ({posts, cardVariant = 'default'}) => {
  return (
    <ul className='flex-center flex-col gap-3 md:gap-5'>
      {posts?.map((post) => (
        <li key={post.id}>
          <PostCard {...post} variant={cardVariant} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
