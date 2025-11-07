const variants = {
  primaryColor: `bg-main text-white`,
  secondaryColor: `bg-white text-black-60`,
};

const Button = ({variant, label, onClick}) => {
  const handleOnClick = () => {
    onClick();
  };

  return (
    <button
      onClick={handleOnClick}
      className={`${variants[variant]} md:min-w-22 cursor-pointer rounded-lg font-medium text-sm md:text-base leading-4 px-4 py-2 shadow-box`}>
      {label}
    </button>
  );
};
export default Button;
