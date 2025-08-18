const Button = ({label}) => {
  return (
    <button className='bg-main px-4 py-2 rounded-lg text-white text-sm font-medium leading-4 md:text-base'>
      {label}
    </button>
  );
};

export default Button;
