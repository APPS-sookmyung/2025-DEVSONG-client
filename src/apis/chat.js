import {privateApi} from '@axios/index';

export const createChatRoom = async (targetUserId) => {
  const response = await privateApi.post(
    `/chat/rooms?targetUserId=${targetUserId}`
  );
  return response;
};

export const getChatRooms = async () => {
  const response = await privateApi.get('/chat/rooms');
  return response;
};

export const getChatMessages = async (roomId) => {
  const response = await privateApi.get(`/chat/rooms/${roomId}/messages`);
  return response;
};
