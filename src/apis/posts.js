import axios from 'axios';

const SERVER_URL = 'http://localhost:8080';

export const getPosts = async ({category}) => {
  const token = localStorage.getItem('accessToken');
  const response = await axios.get(`${SERVER_URL}/post`, {
    params: {category},
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const getPostDetail = async ({post_id}) => {
  const token = localStorage.getItem('accessToken');
  const response = await axios.get(`${SERVER_URL}/post/${post_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const submitNewPost = async (post) => {
  console.log(post);
  const token = localStorage.getItem('accessToken');
  const response = await axios.post(
    `${SERVER_URL}/post/write`,
    {
      title: post.title,
      content: post.content,
      category: post.category,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

export const updatePost = async (post, id) => {
  const token = localStorage.getItem('accessToken');

  const response = await axios.put(
    `${SERVER_URL}/post/write/${id}`,
    {
      title: post.title,
      content: post.content,
      category: post.category,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
