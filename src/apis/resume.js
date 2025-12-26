import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getResumeApi = async () => {
  const response = await api.get('/user/me/resume');
  return response.data;
};

export const updateResumeApi = async (data) => {
  const response = await api.post('/user/me/resume', data);
  return response.data;
};
