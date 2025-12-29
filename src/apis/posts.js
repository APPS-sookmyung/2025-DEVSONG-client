import {privateApi} from '../axios';

// Post 조회
export const getPosts = async (category, page, sortBy, closed) => {
  const params = {
    ...(category && {category}),
    page: page - 1,
    sortBy: sortBy,
    ...(closed !== undefined && {closed}),
  };

  const response = await privateApi.get(`/post`, {
    params,
  });

  return response;
};

// 특정 Post 상세 조회
export const getPostDetail = async (id) => {
  const response = await privateApi.get(`/post/${id}`);
  return response;
};

// Post 작성
export const submitNewPost = async (post) => {
  console.log(post);
  const response = await privateApi.post(`/post/write`, {
    title: post.title,
    content: post.content,
    category: post.category,
  });
  return response;
};

// Post 수정
export const updatePost = async (post) => {
  console.log(post);
  const response = await privateApi.post(`/post/update`, {
    postId: post.postId,
    title: post.title,
    content: post.content,
  });
  return response;
};

// 댓글 작성
export const createComment = async (postId, content, parentId) => {
  const response = await privateApi.post(`/post/comment`, {
    postId,
    content,
    parentId,
  });
  return response;
};

// 지원자 조회
export const getApplicants = async (postId) => {
  const response = await privateApi.get(`/post/${postId}/applicantlist`);
  console.log(response);
  return response;
};

// 지원하기
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

// 마감하기
export const closeApply = async (postId) => {
  const response = await privateApi.post(`/post/${postId}/close`);

  return response;
};
