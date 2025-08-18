import verticalEllipsis from '../../assets/icons/verticalEllipsisIcon.svg';
import back from '../../assets/icons/back.svg';

const PostHeaderActions = ({isAuthor}) => {
  return (
    <div
      className={`hidden md:pb-5 md:flex md:justify-between *:md:bg-grey-01 *:rounded-sm *:p-[2px] *:w-6 *:h-6`}>
      <img src={back} alt='뒤로가기' />
      <img
        className={`${!isAuthor ? 'md:hidden' : ''}`}
        src={verticalEllipsis}
        alt='메뉴'
      />
    </div>
  );
};

export default PostHeaderActions;
