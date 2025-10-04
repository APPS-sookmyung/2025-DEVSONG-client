import React from 'react';
import Button from '../components/common/Button';
import {login} from '../apis/posts';

const Home = () => {
  const handleLogin = async () => {
    const userInfo = {
      email: 'user20@sookmyung.ac.kr',
      password: 'password20',
    };

    const response = await login(userInfo);
    console.log(response.data);
  };

  return (
    <div>
      Home 페이지 입니다!
      <Button label='로그인' onClick={handleLogin} />
    </div>
  );
};

export default Home;
