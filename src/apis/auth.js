import {publicApi} from '../axios/index';

export const login = async (userinfo) => {
  const response = await publicApi.post(`/user/login`, {
    email: userinfo.email,
    password: userinfo.password,
  });

  return response;
};

export const signUp = async (signUpForm) => {
  const response = await publicApi.post(`/user/signup`, {
    // ...signUpForm,
    // email: signUpForm.email + '@sookmyung.ac.kr',
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
};

export const sendEmailVerification = async (email) => {
  const response = await publicApi.post(`/user/send-email`, {
    email: email + '@sookmyung.ac.kr',
  });

  return response;
};

export const verifyEmailCode = async (email, code) => {
  const response = await publicApi.post(`/user/verify-code`, {
    email: email + '@sookmyung.ac.kr',
    code: code,
  });

  return response;
};
