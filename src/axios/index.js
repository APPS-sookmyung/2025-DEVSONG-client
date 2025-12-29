import axios from 'axios';
const BASE_URL = '/api';

// 인증 X (로그인, 회원가입 등)
export const publicApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 인증 필요
export const privateApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청을 보내기 전에 실행되는 인터셉터
privateApi.interceptors.request.use(
  (config) => {
    // 로컬스토리지에서 accessToken 가져오기
    const accessToken = localStorage.getItem('accessToken');
    // accessToken이 존재할 때만 Authorization 헤더 추가
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => Promise.reject(error)
);
