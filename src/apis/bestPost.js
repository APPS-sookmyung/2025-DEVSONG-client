import {privateApi} from '@axios/index';

export const fetchBestPosts = async () => {
  const response = await privateApi.get('/post/best');

  return response.data.map((p) => ({
    id: p.postId,
    title: p.title,
    preview: p.preview,
    closed: p.closed ? '모집완료' : '모집중',
    category: p.category,
  }));
};
