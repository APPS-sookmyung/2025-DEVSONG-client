const ModalLayout = ({children, width}) => {
  return (
    <div
      className={`bg-white absolute z-1 shadow-box ${width} px-2 rounded-lg right-0 top-10`}>
      <div className='flex flex-col *:py-2 *:not-last:border-b-1 *:border-black-20 *:hover:text-main cursor-pointer'>
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
