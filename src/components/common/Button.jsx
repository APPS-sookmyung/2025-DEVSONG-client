const Button = ({label, onClick}) => {
  const handleOnClick = () => {
    onClick();
  };

  return (
    <button
      onClick={handleOnClick}
      className='cursor-pointer bg-main px-4 py-2 rounded-lg text-white text-sm font-medium leading-4 md:text-base'>
      {label}
    </button>
  );
};

export default Button;
