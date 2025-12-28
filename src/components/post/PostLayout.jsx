const PostLayout = ({children}) => {
  return (
    <main className='mx-auto md:w-180 lg:w-212.5 bg-white md:shadow-box md:rounded-3xl md:my-10 scroll-smooth'>
      {children}
    </main>
  );
};

export default PostLayout;
