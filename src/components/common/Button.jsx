const variants = {
  primary: `bg-main text-white`,
  secondary: `bg-white text-black-60`,
};

const Button = ({
  variant = 'primary',
  onClick,
  children,
  classname = 'px-4 py-2',
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classname} ${variants[variant]} cursor-pointer rounded-lg font-medium text-sm md:text-base shadow-box`}>
      {children}
    </button>
  );
};
export default Button;
