import axios from 'axios';

const SERVER_URL = 'http://localhost:8080';

export const login = async (userinfo) => {
  const response = axios.post(`${SERVER_URL}/user/login`, {
    email: userinfo.email,
    password: userinfo.password,
  });

  const {accessToken} = response.token;
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
  }

  return response;
};

export const getPosts = async ({category}) => {
  const token = localStorage.getItem('accessToken');
  const response = await axios.get(`${SERVER_URL}/posts`, {
    params: {category},
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const getPostDetail = async ({post_id}) => {
  const response = await axios.get(`${SERVER_URL}/post/${post_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
