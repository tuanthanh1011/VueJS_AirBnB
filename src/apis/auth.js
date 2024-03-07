import axiosAPI from ".";

export const getAllUserAccountAPI = async () => {
  return await axiosAPI.get("/users");
};

export const createAUserAccountAPI = async (data) => {
  return await axiosAPI.post("/users", data);
};

export const updateAUserAccountAPI = async (idUser, data) => {
  return await axiosAPI.put(`/users/${idUser}`, data);
};
