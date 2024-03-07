import axiosAPI from ".";
export const getLocationListAPI = async () => {
  return await axiosAPI.get("/locations");
};
