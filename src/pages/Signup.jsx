import Button from '@components/common/Button';
import InputField from '@components/common/InputField';
import StackModal from '@components/common/StackModal';
import Step1 from '@components/signup/Step1';
import Step2 from '@components/signup/Step2';
import Step3 from '@components/signup/Step3';
import Step4 from '@components/signup/Step4';
import {useState} from 'react';

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  console.log(currentStep);

  return (
    <main>
      <div
        className='min-h-screen flex items-center justify-center'
        style={{
          background:
            'linear-gradient(154deg, #a4b8ff 0%, #a8d4ff 56.76%, #d9f6ff 86.78%)',
        }}>
        <div className='bg-white p-5 md:p-8 rounded-3xl shadow-lg w-[85%] md:w-full max-w-md'>
          <form>
            {currentStep === 1 && <Step1 handleNextStep={handleNextStep} />}
            {currentStep === 2 && <Step2 handleNextStep={handleNextStep} />}
            {currentStep === 3 && <Step3 handleNextStep={handleNextStep} />}
            {currentStep === 4 && <Step4 handleNextStep={handleNextStep} />}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Signup;
