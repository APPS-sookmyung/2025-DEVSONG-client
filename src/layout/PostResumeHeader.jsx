import back from '../assets/icons/back2.svg';
import {Link} from 'react-router-dom';
import PostActionMenu from '@components/post/PostActionMenu';

const PostResumeHeader = ({
  isPost = false,
  isAuthor,
  postId,
  handlePostUpdate,
}) => {
  return (
    <header className='bg-white w-full h-16 px-6 flex items-center relative z-50 justify-between shadow-box md:shadow-none *:cursor-pointer md:hidden'>
      <Link to={isPost ? '/posts' : -1}>
        <img className='w-5 h-5' src={back} alt='뒤로가기' />
      </Link>
      <PostActionMenu
        isAuthor={isAuthor}
        postId={postId}
        handlePostUpdate={handlePostUpdate}
      />
    </header>
  );
};

export default PostResumeHeader;
