import axiosAPI from ".";
export const getAllReviewAPI = async () => {
  return await axiosAPI.get("/reviews");
};

export const createARoomAPI = async (data) => {
  return await axiosAPI.post("/reviews", data);
};
