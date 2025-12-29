import axios from 'axios';

const SERVER_URL = 'http://localhost:8080';

export const fetchBojRanking = async () => {
  const token = localStorage.getItem('accessToken');
  const config = token ? {headers: {Authorization: `Bearer ${token}`}} : {};

  const response = await axios.get(`${SERVER_URL}/ranking/boj`, config);

  const mappedData = response.data.map((user) => ({
    rank: user.rank,
    username: user.username,
    bojId: user.bojId,
    rating: user.rating,
    solvedCount: user.solvedCount,
  }));

  return mappedData;
};
