import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import {login} from '../apis/login';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      alert('이메일과 비밀번호를 모두 입력해주세요.');
      return;
    }

    const userInfo = {
      email: email,
      password: password,
    };

    try {
      const response = await login(userInfo);
      console.log('로그인 성공:', response.data);

      if (response.data && response.data.token) {
        localStorage.setItem('accessToken', response.data.token);
      }
      navigate('/home');
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <main>
      <div
        className='min-h-screen flex items-center justify-center'
        style={{
          background:
            'linear-gradient(154deg, #a4b8ff 0%, #a8d4ff 56.76%, #d9f6ff 86.78%)',
        }}>
        <div className='bg-white p-6 md:p-10 rounded-3xl shadow-lg w-[85%] md:w-full max-w-md'>
          <div className='flex justify-center mb-8'>
            <img src={logo} alt='Devsong Logo' className='h-10 w-auto' />
          </div>

          <div className='flex gap-4'>
            <div className='flex flex-col gap-4 flex-1'>
              <input
                type='text'
                placeholder='숙명 이메일'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-3 border border-black-20 rounded-lg bg-grey-01 focus:outline-none focus:ring-1 focus:ring-main'
              />
              <input
                type='password'
                placeholder='비밀번호'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                className='w-full p-3 border border-black-20 rounded-lg bg-grey-01 focus:outline-none focus:ring-1 focus:ring-main'
              />
            </div>

            {/* 데스크톱용 버튼 */}
            <button
              onClick={handleLogin}
              className='hidden md:block cursor-pointer bg-main hover:brightness-90 text-white font-bold py-3 px-6 rounded-lg w-1/3 transition-all'>
              로그인
            </button>
          </div>

          <div className='flex justify-center mt-6 text-sm text-black-60'>
            <Link to='/signup' className='hover:text-black-60'>
              회원가입
            </Link>
            <span className='mx-4'>|</span>
            <a href='#' className='hover:text-black-60 pointer-events-none'>
              비밀번호 초기화
            </a>
          </div>

          {/* 모바일용 버튼 */}
          <button
            onClick={handleLogin}
            className='md:hidden block w-full mt-6 cursor-pointer bg-main hover:brightness-90 text-white font-bold py-3 px-6 rounded-lg transition-all'>
            로그인
          </button>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
