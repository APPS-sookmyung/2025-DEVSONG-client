import {privateApi} from '../axios';

export const getPosts = async (category) => {
  const response = await privateApi.get(`/post`, {
    params: category ? {category} : {}, // 조건부 params 처리
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
  return response;
};

export const applyToPost = async (postId) => {
  const response = await privateApi.post(`/post/${postId}/apply`);
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
