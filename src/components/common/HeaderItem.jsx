const HeaderItem = ({icon, label}) => {
  return (
    <li>
      <span
        className={`flex ${
          label !== 0 ? 'items-center gap-1 whitespace-nowrap' : 'gap-3'
        }`}>
        <img src={icon} alt={label} />
        {label}
      </span>
    </li>
  );
};

export default HeaderItem;
