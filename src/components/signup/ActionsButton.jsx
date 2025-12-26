import Button from '@components/common/Button';

const ButtonActions = ({handleNextStep, isDisabled = true}) => {
  return (
    <section className='flex justify-between items-center mt-6'>
      <Button
        variant='ghost'
        className='text-[10px] hover:text-black-80 hover:font-semibold cursor-pointer'
        size='none'
        onClick={handleNextStep}>
        건너뛰기
      </Button>
      <Button
        onClick={handleNextStep}
        className='disabled:bg-grey-02 disabled:text-black-60 w-22.5 h-10 md:w-31 md:h-12'
        disabled={isDisabled}
        variant='primary'>
        다음
      </Button>
    </section>
  );
};

export default ButtonActions;
