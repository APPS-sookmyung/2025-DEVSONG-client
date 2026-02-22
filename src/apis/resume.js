import {privateApi} from '../axios/index';

export const getResumeApi = async () => {
  const response = await privateApi.get('/user/me/resume');
  return response.data;
};

export const updateResumeApi = async (data) => {
  const response = await privateApi.post('/user/me/resume', data);
  return response.data;
};

export const uploadProfileImageApi = async (file) => {
  const formData = new FormData();
  formData.append('image', file);

  const response = await privateApi.post('/user/profile/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};
