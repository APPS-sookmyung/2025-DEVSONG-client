import {privateApi} from '../axios/index';

const mapPostId = (data) =>
  data.map((post) => ({
    ...post,
    id: post.id,
  }));

export const getMyPosts = async () => {
  const res = await privateApi.get('/user/me/posts');
  return mapPostId(res.data);
};

export const getMyComments = async () => {
  const res = await privateApi.get('/user/me/comments');
  return mapPostId(res.data);
};

export const getMyLikes = async () => {
  const res = await privateApi.get('/user/me/likes');
  return mapPostId(res.data);
};

export const getMyApplies = async () => {
  const res = await privateApi.get('/user/me/applies');
  return mapPostId(res.data);
};

export const getMyProfile = async () => {
  const res = await privateApi.get('/user/me');
  return res.data;
};

export const updateMyProfile = async (data) => {
  const res = await privateApi.post('/user/me', data);
  return res.data;
};
