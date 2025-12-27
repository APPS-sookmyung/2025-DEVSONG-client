const base = `cursor-pointer whitespace-nowrap 
rounded-3xl shadow-box font-semibold hover:bg-main hover:text-white`;
const mobile = 'w-15 text-xs leading-4 px-2 py-1';
const responsive = `md:w-20.5 md:text-base md:leading-5 md:px-3 md:py-2 
lg:w-26 lg:text-lg lg:leading-6`;

const Option = ({category, label, selected, onCategorySelect}) => {
  const onClick = () => {
    onCategorySelect(category);
  };

  return (
    <div>
      <li
        onClick={onClick}
        className={`${
          category === selected
            ? 'bg-main text-white'
            : 'bg-white text-black-60'
        } ${base} ${mobile} ${responsive}`}>
        {label}
      </li>
    </div>
  );
};

export default Option;
