import {privateApi} from '../axios';

export const getPosts = async (category, page, sortBy, closed) => {
  const params = {
    ...(category && {category}),
    page: page - 1,
    sortBy: sortBy,
    ...(typeof closed === 'boolean' ? {closed} : {}),
  };

  const response = await privateApi.get(`/post`, {
    params,
  });

  return response;
};

export const getPostDetail = async (id) => {
  const response = await privateApi.get(`/post/${id}`);
  return response;
};

export const submitNewPost = async (post) => {
  console.log(post);
  const response = await privateApi.post(`/post/write`, {
    title: post.title,
    content: post.content,
    category: post.category,
  });
  return response;
};

export const createComment = async (postId, content, parentId) => {
  const response = await privateApi.post(`/post/comment`, {
    postId,
    content,
    parentId,
  });
  return response;
};

export const getApplicants = async (postId) => {
  const response = await privateApi.get(`/post/${postId}/applicantlist`);
  console.log(response);
  return response;
};

export const applyToPost = async (postId) => {
  const response = await privateApi.post(`/post/apply`, {
    postId,
  });

  return response;
};

// 좋아요
export const likePost = async (postId) => {
  const response = await privateApi.post(`/post/like`, {
    postId,
  });
  return response;
};

// export const updatePost = async (post, id) => {
//   const response = await privateApi.put(`/post/write/${id}`, {
//     title: post.title,
//     content: post.content,
//     category: post.category,
//   });
//   return response;
// };
