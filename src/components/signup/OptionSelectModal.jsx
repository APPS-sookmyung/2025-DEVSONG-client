const OptionSelectModal = ({
  title,
  allOptions,
  signUpForm,
  toggleOptionValue,
}) => {
  const optionsKey = title === '기술 스택' ? 'techStack' : 'interests';
  return (
    <section>
      <h2 className='text-xs md:text-base font-semibold leading-5 md:leading-6 mb-2'>
        {title}
      </h2>
      <div className='flex flex-wrap gap-2'>
        {allOptions.map((option) => {
          const isSelected = signUpForm[optionsKey].includes(option);
          return (
            <span
              key={option}
              onClick={() => toggleOptionValue(optionsKey, option)}
              className={`px-2 py-1.5 md:px-3 md:py-2 rounded-md text-xs md:text-sm text-center font-medium cursor-pointer ${
                isSelected
                  ? 'bg-main-16 text-black-100'
                  : 'bg-grey-02 text-black-60'
              }`}>
              {option}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default OptionSelectModal;
