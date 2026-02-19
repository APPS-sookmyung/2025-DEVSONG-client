import useGoBack from '@hooks/useGoBack';
import back from '../../assets/icons/back_grey.svg';
import PostActionMenu from './PostActionMenu';

const PostHeaderActions = ({
  isAuthor,
  postId,
  handlePostUpdate,
  handlePostClose,
}) => {
  const goBack = useGoBack('/posts');
  return (
    <div className='hidden md:pb-5 md:flex md:justify-between *:md:bg-grey-01 *:rounded-sm *:cursor-pointet'>
      <div
        onClick={() => goBack()}
        className='flex-center w-7 h-7 px-[5.5px] py-[10.5px] cursor-pointer'>
        <img src={back} alt='뒤로가기' />
      </div>
      <PostActionMenu
        isAuthor={isAuthor}
        postId={postId}
        handlePostUpdate={handlePostUpdate}
        handlePostClose={handlePostClose}
      />
    </div>
  );
};

export default PostHeaderActions;
