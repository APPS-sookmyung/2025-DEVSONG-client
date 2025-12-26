import {useState} from 'react';
import OptionSelectModal from './OptionSelectModal';
import {useMediaQuery} from 'react-responsive';
import {allInterests, allStacks} from './options';
import ActionsButton from './ActionsButton';

const Step3 = ({handleNextStep, toggleOptionValue, signUpForm}) => {
  const isMobile = useMediaQuery({query: '(max-width:768px)'});
  const interestNotSelected = !(signUpForm.interests.length > 0);
  const stackNotSelected = !(signUpForm.techStack.length > 0);

  const [isInterestStep, setIsInterestStep] = useState(false);

  const handleNextMobile = () => {
    setIsInterestStep(true);
  };

  // Mobile용 컨텐츠 렌더링
  const renderMobileContent = () => {
    return (
      <>
        <OptionSelectModal
          title={isInterestStep ? '관심 분야' : '기술 스택'}
          allOptions={isInterestStep ? allInterests : allStacks}
          signUpForm={signUpForm}
          toggleOptionValue={toggleOptionValue}
        />
        <ActionsButton
          handleNextStep={isInterestStep ? handleNextStep : handleNextMobile}
          isDisabled={isInterestStep ? interestNotSelected : stackNotSelected}
        />
      </>
    );
  };

  // Desktop용 컨텐츠 렌더링
  const renderDesktopContent = () => {
    return (
      <div className='flex flex-col gap-5'>
        <OptionSelectModal
          title='기술 스택'
          allOptions={allStacks}
          signUpForm={signUpForm}
          toggleOptionValue={toggleOptionValue}
        />
        <OptionSelectModal
          title='관심분야'
          allOptions={allInterests}
          signUpForm={signUpForm}
          toggleOptionValue={toggleOptionValue}
        />
        <ActionsButton
          handleNextStep={handleNextStep}
          isDisabled={interestNotSelected || stackNotSelected}
        />
      </div>
    );
  };

  return (
    <section>
      <h2 className='font-semibold leading-6 text-base md:text-xl mb-4 md:mb-5'>
        추가 정보 입력
      </h2>

      {/* Mobile과 Desktop 분기 처리 */}
      {isMobile ? renderMobileContent() : renderDesktopContent()}
    </section>
  );
};

export default Step3;
