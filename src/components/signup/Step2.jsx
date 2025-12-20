import Button from '@components/common/Button';
import InputField from '@components/common/InputField';

const Step2 = ({handleNextStep}) => {
  return (
    <div>
      <h2 className='font-semibold leading-6 text-base md:text-xl mb-4 md:mb-5'>
        추가 정보 입력
      </h2>
      <div className='flex flex-col gap-4 md:gap-6'>
        <InputField label='Github 아이디' />
        <InputField label='BOJ 핸들' />
      </div>
      <div className='flex justify-between items-center mt-6'>
        <button className='text-base text-black-60'>건너뛰기</button>
        <Button
          onClick={handleNextStep}
          classname='w-32 h-12 px-4 py-2'
          variant='primary'>
          다음
        </Button>
      </div>
    </div>
  );
};

export default Step2;
