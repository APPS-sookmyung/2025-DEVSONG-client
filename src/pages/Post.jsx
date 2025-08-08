import PostHeader from '../components/post/PostHeader';
import {postData} from '../components/post/dummy';

const Post = () => {
  return (
    <div>
      <PostHeader title={postData.title} author={postData.username} />
    </div>
  );
};

export default Post;
