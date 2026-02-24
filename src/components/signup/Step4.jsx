import Button from '@components/common/Button';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Step4 = ({handleSignUp}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await handleSignUp();
      navigate('/');
    } catch {
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='flex flex-col'>
      <h2 className='h-40 md:h-50 flex-center text-center font-semibold leading-6 text-base md:text-2xl md:leading-10'>
        회원가입이 완료되었어요
      </h2>
      <Button onClick={handleClick} disabled={loading} className='h-10 md:h-12'>
        {loading ? '이동 중..' : '로그인 하기'}
      </Button>
    </section>
  );
};

export default Step4;
