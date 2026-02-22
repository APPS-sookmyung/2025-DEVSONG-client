import {publicApi} from '../axios/index';

export const login = async (userinfo) => {
  try {
    const response = await publicApi.post(`/user/login`, {
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

export const signUp = async (signUpForm) => {
  try {
    const response = await publicApi.post(`/user/signup`, {
      email: signUpForm.email + '@sookmyung.ac.kr',
      password: signUpForm.password,
      username: signUpForm.username,
      studentId: signUpForm.studentId,
      major: signUpForm.major,
      bojId: signUpForm.bojId,
      githubId: signUpForm.githubId,
      techStack: signUpForm.techStack,
    });

    return response;
  } catch {
    console.error('회원가입 실패:', error);
    throw error;
  }
};
