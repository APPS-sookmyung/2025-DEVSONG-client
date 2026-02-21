import {privateApi} from '@axios/index';

export const fetchBojRanking = async () => {
  const response = await privateApi.get('/ranking/boj');

  const mappedData = response.data.map((user) => ({
    rank: user.rank,
    username: user.username,
    bojId: user.bojId,
    rating: user.rating,
    solvedCount: user.solvedCount,
  }));

  return mappedData;
};
