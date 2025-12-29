const variants = {
  primary: `bg-main text-white`,
  secondary: `bg-white text-black-60`,
  tertiary: 'bg-grey-02 text-black-60',
  ghost: `text-black-60`,
};

const sizes = {
  md: 'px-4 py-2',
  none: 'p-0',
};

const Button = ({
  variant = 'primary',
  onClick,
  children,
  className = '',
  size = 'md',
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${sizes[size]} ${className} ${variants[variant]} cursor-pointer rounded-lg font-medium text-sm md:text-base`}>
      {children}
    </button>
  );
};
export default Button;
