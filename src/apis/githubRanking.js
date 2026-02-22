import {privateApi} from '@axios/index';

export const fetchGithubRanking = async () => {
  const response = await privateApi.get('/ranking/github');

  const mappedData = response.data.map((user) => ({
    rank: user.rank,
    username: user.username,
    githubId: user.githubId,
    commitCount: user.commitCount,
  }));

  return mappedData;
};
