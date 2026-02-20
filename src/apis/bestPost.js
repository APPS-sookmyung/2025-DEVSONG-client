import axios from 'axios';

const SERVER_URL = '/api';

export const fetchBestPosts = async () => {
  const token = localStorage.getItem('accessToken');
  const response = await axios.get(`${SERVER_URL}/post/best`, {
    headers: {Authorization: `Bearer ${token}`},
  });
  return response.data.map((p) => ({
    id: p.postId,
    title: p.title,
    preview: p.preview,
    closed: p.closed ? '모집완료' : '모집중',
    category: p.category,
  }));
};
