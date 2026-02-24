import InputField from '@components/common/InputField';
import ActionsButton from './ActionsButton';

const Step2 = ({handleNextStep, handleDataEnter, signUpForm}) => {
  const isDisabled = !(
    signUpForm.githubId.trim().length > 0 && signUpForm.bojId.trim().length > 0
  );
  return (
    <section>
      <h2 className='font-semibold leading-6 text-base md:text-xl mb-4 md:mb-5'>
        추가 정보 입력
      </h2>
      <div className='flex flex-col gap-4 md:gap-6'>
        <InputField
          label='Github 아이디'
          name='githubId'
          value={signUpForm.githubId}
          onChange={handleDataEnter}
          placeholder={'Github 아이디'}
        />
        <InputField
          label='BOJ 핸들'
          name='bojId'
          value={signUpForm.bojId}
          onChange={handleDataEnter}
          placeholder={'BOJ 핸들'}
        />
      </div>
      <ActionsButton handleNextStep={handleNextStep} handleSkip={handleNextStep} isDisabled={isDisabled} />
    </section>
  );
};

export default Step2;
