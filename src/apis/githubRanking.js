import axios from 'axios';

const SERVER_URL = 'http://localhost:8080';

export const fetchGithubRanking = async () => {
  const token = localStorage.getItem('accessToken');
  const config = token ? {headers: {Authorization: `Bearer ${token}`}} : {};

  const response = await axios.get(`${SERVER_URL}/ranking/github`, config);

  const mappedData = response.data.map((user) => ({
    rank: user.rank,
    username: user.username,
    githubId: user.githubId,
    commitCount: user.commitCount,
  }));

  return mappedData;
};
