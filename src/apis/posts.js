import {privateApi} from '../axios';

export const getPosts = async ({category}) => {
  const response = await privateApi.get(`/post`, {params: {category}});
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

// export const updatePost = async (post, id) => {
//   const response = await privateApi.put(`/post/write/${id}`, {
//     title: post.title,
//     content: post.content,
//     category: post.category,
//   });
//   return response;
// };
