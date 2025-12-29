import Button from '@components/common/Button';
import {Link} from 'react-router-dom';

const Step4 = ({handleSignUp}) => {
  return (
    <section className='flex flex-col'>
      <h2 className='h-40 md:h-50 flex-center text-center font-semibold leading-6 text-base md:text-2xl md:leading-10'>
        회원가입이 완료되었어요
      </h2>
      <Button onClick={handleSignUp} className='h-10 md:h-12'>
        <Link to='/login' className='w-full h-full flex-center'>
          로그인 하기
        </Link>
      </Button>
    </section>
  );
};

export default Step4;
