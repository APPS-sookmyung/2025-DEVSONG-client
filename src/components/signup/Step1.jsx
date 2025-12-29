import Button from '@components/common/Button';
import InputField from '@components/common/InputField';
import {useState} from 'react';

// 이름, 이메일, 비번, 학번, 전공
const Step1 = ({handleNextStep, handleDataEnter, signUpForm}) => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(null);

  const isNextEnabled =
    signUpForm.username.trim().length > 0 &&
    signUpForm.email.trim().length > 0 &&
    signUpForm.password.length > 0 &&
    passwordsMatch === true &&
    signUpForm.studentId.trim().length > 0 &&
    signUpForm.major.trim().length > 0;

  // 비밀번호 일치 여부 확인
  const handlePasswordConfirm = (e) => {
    const {value} = e.target;
    setConfirmPassword(value);

    if (signUpForm.password !== value) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };

  return (
    <section className='flex flex-col'>
      <h2 className='font-semibold leading-6 text-base md:text-xl mb-4 md:mb-5'>
        회원가입
      </h2>
      <div className='w-full grid grid-cols gap gap-4 md:gap-6'>
        <InputField
          label='이름'
          name='username'
          value={signUpForm.username}
          onChange={handleDataEnter}
          placeholder={'이름 입력'}
          required={true}
        />
        <div className='flex flex-col gap-2'>
          <InputField
            label='이메일'
            name='email'
            value={signUpForm.email}
            onChange={handleDataEnter}
            required={true}
            placeholder={'이메일 아이디'}
            suffix={'@sookmyung.ac.kr'}
          />
          <Button
            variant='primary'
            className='bg-main/70 h-10 md:h-12'
            disabled={verifyEmail === false}>
            이메일 인증
          </Button>
        </div>

        <InputField
          label='비밀번호'
          name='password'
          value={signUpForm.password}
          onChange={handleDataEnter}
          type='password'
          placeholder={'비밀번호 (8자 이상)'}
          required={true}
        />
        <InputField
          label='비밀번호 확인'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handlePasswordConfirm}
          type='password'
          placeholder={'비밀번호 확인'}
          className={
            passwordsMatch === false
              ? 'focus:ring-red-500'
              : 'focus:ring-green-400'
          }
          required={true}
        />
        <div className='grid grid-cols-2 gap-1 md:gap-3'>
          <InputField
            label='학번'
            name='studentId'
            value={signUpForm.studentId}
            onChange={handleDataEnter}
            placeholder={'25'}
            required={true}
          />
          <InputField
            label='전공'
            name='major'
            value={signUpForm.major}
            onChange={handleDataEnter}
            placeholder={'컴퓨터과학전공'}
            required={true}
          />
        </div>
      </div>
      <Button
        onClick={handleNextStep}
        variant='primary'
        className={`${
          isNextEnabled === false ? 'pointer-events-none bg-main/70' : ''
        } h-10 md:h-12 mt-4 md:mt-5`}
        disabled={isNextEnabled === false}>
        회원가입
      </Button>
    </section>
  );
};

export default Step1;
