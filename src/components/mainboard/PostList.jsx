import PostCard from './PostCard';
import {useNavigate, useParams, useSearchParams} from 'react-router-dom';
import {getPosts} from '../../apis/posts';
import {useEffect, useState} from 'react';

const PostList = () => {
  const {category} = useParams();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await getPosts({category: category});
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, [category]);

  return (
    <div className=''>
      <div className='flex-center flex-col gap-3 md:gap-5'>
        {posts?.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
