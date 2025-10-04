import {authAxios} from '../axios/index';

export const login = async (userinfo) => {
  try {
    const response = await authAxios.post(`/user/login`, {
      email: userinfo.email,
      password: userinfo.password,
    });

    const accessToken = response.data.token;

    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }

    return response;
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error;
  }
};
