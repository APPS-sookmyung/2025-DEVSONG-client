import ModalLayout from '../common/ModalLayout';

const optionItems = ['최신순', '관심순'];
const SortOptions = () => {
  return (
    <ModalLayout width={'w-17 md:w-20 lg:w-24'}>
      {optionItems.map((option, index) => (
        <div
          key={index}
          className='text-xs md:text-sm lg:text-base font-medium text-black-100 lg:pl-1.5'>
          {option}
        </div>
      ))}
    </ModalLayout>
  );
};

export default SortOptions;
