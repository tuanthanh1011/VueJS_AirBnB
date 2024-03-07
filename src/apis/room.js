import axiosAPI from ".";
export const getRoomListAPI = async () => {
  return await axiosAPI.get("/rooms");
};

export const getRoomByIdAPI = async (roomId) => {
  return await axiosAPI.get(`/rooms/${roomId}`);
};
