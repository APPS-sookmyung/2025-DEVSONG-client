import {prototypejs} from 'globals';

const InputField = ({
  label,
  type = 'text',
  value,
  name,
  onChange,
  placeholder,
  className = '',
  required = false,
  suffix,
  ...props
}) => {
  return (
    <div>
      {
        <label className='text-black-100 block mb-2 font-semibold text-xs leading-5 md:text-base md:leading-6'>
          {label}
          {required && <span className='pl-0.5 text-black-100'>*</span>}
        </label>
      }
      <div className='flex items-center gap-2'>
        <input
          autoComplete='off'
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`${className} w-full p-2.5 md:p-3 border border-grey-02 rounded-lg bg-grey-01 placeholder:text-xs md:placeholder:text-base focus:outline-none focus:ring-1 focus:ring-main`}
          {...props}></input>
        {suffix && (
          <div className='whitespace-nowrap font-medium text-[10px] md:text-base leading-4 md:leading-6'>
            {suffix}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
