import iconSvg from '../../assets/icons/icon.svg';

const Icon = ({id, size = '24', ...rest}) => {
  return (
    <svg {...rest} width={size} height={size}>
      <use href={`${iconSvg}#${id}`} />
    </svg>
  );
};

export default Icon;
