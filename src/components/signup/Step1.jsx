import {sendEmailVerification, verifyEmailCode} from '@apis/auth';
import Button from '@components/common/Button';
import InputField from '@components/common/InputField';
import {useState} from 'react';

// 이름, 이메일, 비번, 학번, 전공
const Step1 = ({handleNextStep, handleDataEnter, signUpForm}) => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(null);
  const [emailSent, setEmailSent] = useState(false);
  const [emailCode, setEmailCode] = useState('');
  const [isSending, setIsSending] = useState(false);

  const isNextEnabled =
    signUpForm.username.trim().length > 0 &&
    signUpForm.email.trim().length > 0 &&
    signUpForm.password.length > 0 &&
    passwordsMatch === true &&
    signUpForm.studentId.trim().length > 0 &&
    signUpForm.major.trim().length > 0;
  // verifyEmail === true;

  // 비밀번호 일치 여부 확인
  const handlePasswordConfirm = (e) => {
    const {value} = e.target;
    setConfirmPassword(value);
    setPasswordsMatch(signUpForm.password === value);
  };

  // 이메일 인증 요청
  const handleSendEmailVerification = async () => {
    setIsSending(true);
    try {
      await sendEmailVerification(signUpForm.email);
      setEmailSent(true);
    } catch (error) {
      console.error('이메일 인증 요청 실패:', error);
      alert('이메일 인증 요청에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSending(false);
    }
  };

  // 이메일 인증 코드 검증
  const handleVerifyCode = async () => {
    try {
      const response = await verifyEmailCode(signUpForm.email, emailCode);
      if (response.data.available) {
        setVerifyEmail(true);
      } else {
        alert('인증 코드가 올바르지 않습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('이메일 인증 실패:', error);
      alert('이메일 인증에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const emailInputDisabled = signUpForm.email.trim().length === 0 || isSending;

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
            disabled={emailSent} // 이메일 발송 후 수정 방지
          />

          {/* 이메일 인증 버튼 및 입력 필드 */}
          {!emailSent ? (
            <Button
              variant='primary'
              className={`${
                emailInputDisabled ? 'pointer-events-none bg-main/70' : ''
              } h-10 md:h-12`}
              disabled={emailInputDisabled}
              onClick={handleSendEmailVerification}>
              {isSending ? '인증 메일 발송 중...' : '이메일 인증'}
            </Button>
          ) : (
            <div className='flex items-end gap-2'>
              <div className='flex-1'>
                <InputField
                  placeholder='인증 코드 입력'
                  value={emailCode}
                  onChange={(e) => setEmailCode(e.target.value)}
                />
              </div>
              <Button
                variant='primary'
                className='w-21.5 md:w-34.5 h-11.5 md:h-12.5 shrink-0'
                disabled={emailCode.trim().length === 0 || verifyEmail}
                onClick={handleVerifyCode}>
                {verifyEmail ? '인증 완료' : '인증'}
              </Button>
            </div>
          )}

          {/* 인증 완료 메시지 */}
          {verifyEmail && (
            <p className='text-xs text-green'>이메일 인증이 완료되었습니다.</p>
          )}
        </div>

        <InputField
          label='비밀번호'
          name='password'
          value={signUpForm.password}
          onChange={handleDataEnter}
          type='password'
          placeholder={'비밀번호'}
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
            passwordsMatch === false ? 'focus:ring-red' : 'focus:ring-green'
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
        다음
      </Button>
    </section>
  );
};

export default Step1;
