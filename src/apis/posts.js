import axios from 'axios';

const SERVER_URL = 'http://localhost:4000';

export const getPosts = async ({category}) => {
  const response = await axios.get(`${SERVER_URL}/posts`, {params: {category}});
  return response;
};

export const getPostDetail = async ({post_id}) => {
  const response = await axios.get(`${SERVER_URL}/post/${post_id}`);
  return response;
};

export const submitPost = async ({post}) => {
  const response = axios.post(`${SERVER_URL}/post`, post);
  return response;
};
