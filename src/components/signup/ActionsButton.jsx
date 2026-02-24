import Button from '@components/common/Button';

const ActionsButton = ({handleNextStep, handleSkip, isDisabled = true}) => {
  return (
    <section className='flex justify-between items-center mt-6'>
      {handleSkip && (
        <Button
          variant='ghost'
          className='text-[10px] hover:text-black-80 hover:font-semibold cursor-pointer'
          size='none'
          onClick={handleSkip}>
          건너뛰기
        </Button>
      )}
      <Button
        onClick={handleNextStep}
        className='disabled:bg-grey-02 disabled:text-black-60 w-22.5 h-10 md:w-31 md:h-12 ml-auto'
        disabled={isDisabled}
        variant='primary'>
        다음
      </Button>
    </section>
  );
};

export default ActionsButton;
