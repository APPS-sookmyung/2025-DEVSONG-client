import Button from '@components/common/Button';
import InputField from '@components/common/InputField';

const Step1 = ({handleNextStep}) => {
  return (
    <div className='flex flex-col'>
      <h2 className='font-semibold leading-6 text-base md:text-xl mb-4 md:mb-5'>
        회원가입
      </h2>
      <div className='w-full grid grid-cols gap gap-4 md:gap-6'>
        <InputField label='이름' required={true} />
        <div className='flex flex-col gap-2'>
          <InputField
            label='이메일'
            type='email'
            required={true}
            suffix={'@sookmyung.ac.kr'}
          />
          <Button variant='primary' classname='px-4 py-2 h-10 md:h-12'>
            이메일 인증
          </Button>
        </div>

        <InputField label='비밀번호' type='password' required={true} />
        <InputField label='비밀번호 확인' type='password' required={true} />
        <div className='grid grid-cols-2 gap-1 md:gap-3'>
          <InputField label='학번' required={true} />
          <InputField label='전공' required={true} />
        </div>
      </div>
      <Button
        onClick={handleNextStep}
        variant='primary'
        classname='px-4 py-2 h-10 md:h-12 mt-4 md:mt-5'>
        회원가입
      </Button>
    </div>
  );
};

export default Step1;
