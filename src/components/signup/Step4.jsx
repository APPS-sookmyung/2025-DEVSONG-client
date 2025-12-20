import Button from '@components/common/Button';
import {useNavigate} from 'react-router-dom';

const Step4 = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col'>
      <h2 className='h-50 flex-center text-center font-semibold leading-6 text-base md:text-2xl md:leading-10'>
        회원가입이 완료되었어요
      </h2>
      <Button classname='h-12' onClick={navigate('login')}>
        로그인 하기
      </Button>
    </div>
  );
};

export default Step4;
