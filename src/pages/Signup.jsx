import Step1 from '@components/signup/Step1';
import Step2 from '@components/signup/Step2';
import Step3 from '@components/signup/Step3';
import Step4 from '@components/signup/Step4';
import {useState} from 'react';

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [signUpForm, setSignUpForm] = useState({
    username: '',
    email: '',
    password: '',
    studentId: '',
    major: '',
    githubId: '',
    bojId: '',
    techStack: [],
    interests: [],
  });

  const handleNextStep = (e) => {
    e.preventDefault();
    setCurrentStep((prev) => prev + 1);
  };

  const handleDataEnter = (e) => {
    const {name, value} = e.target;
    setSignUpForm((prev) => ({...prev, [name]: value}));
  };

  const toggleOptionValue = (key, option) => {
    setSignUpForm((prev) => {
      const selected = prev[key].includes(option);
      return {
        ...prev,
        [key]: selected
          ? prev[key].filter((item) => item !== option)
          : [...prev[key], option],
      };
    });
  };

  return (
    <main>
      <div
        className='min-h-screen flex items-center justify-center py-32'
        style={{
          background:
            'linear-gradient(154deg, #a4b8ff 0%, #a8d4ff 56.76%, #d9f6ff 86.78%)',
        }}>
        <div className='bg-white p-5 md:p-8 rounded-3xl shadow-lg w-[85%] md:w-full max-w-137.5'>
          {currentStep === 1 && (
            <Step1
              handleNextStep={handleNextStep}
              handleDataEnter={handleDataEnter}
              signUpForm={signUpForm}
            />
          )}
          {currentStep === 2 && (
            <Step2
              handleNextStep={handleNextStep}
              handleDataEnter={handleDataEnter}
              signUpForm={signUpForm}
            />
          )}
          {currentStep === 3 && (
            <Step3
              handleNextStep={handleNextStep}
              toggleOptionValue={toggleOptionValue}
              signUpForm={signUpForm}
            />
          )}
          {currentStep === 4 && <Step4 handleNextStep={handleNextStep} />}
        </div>
      </div>
    </main>
  );
};

export default Signup;
