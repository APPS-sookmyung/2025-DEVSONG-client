import axios from 'axios';

const SERVER_URL = 'http://localhost:4000';

export const getPostDetail = async ({post_id}) => {
  const response = await axios.get(SERVER_URL + `/post/${post_id}`);
  return response;
};
