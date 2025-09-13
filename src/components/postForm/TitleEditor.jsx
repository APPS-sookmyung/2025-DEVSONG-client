const TitleEditor = ({title, handleTitleChange}) => {
  return (
    <div className='w-86.5 pb-9 md:w-144 lg:w-200'>
      <input
        type='text'
        value={title}
        onChange={handleTitleChange}
        placeholder='제목을 입력해주세요.'
        className={`w-full border-b-2 pb-3 focus:outline-none text-xl font-semibold border-black-60
          md:text-2xl lg:text-[32px] lg:font-bold`}
      />
    </div>
  );
};

export default TitleEditor;
