import back from '../../assets/icons/back.svg';

const PostFormLayout = ({children}) => {
  return (
    <>
      <header className='bg-white flex items-center justify-between p-6 md:hidden *:cursor-pointer'>
        <img src={back} alt='뒤로가기' />
        <span className='text-main text-sm font-semibold'>등록</span>
      </header>
      {children}
    </>
  );
};

export default PostFormLayout;
