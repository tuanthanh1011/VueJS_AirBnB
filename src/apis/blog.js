import axiosAPI from ".";
export const getAllBlogAPI = async () => {
  return await axiosAPI.get("/blogs");
};

export const getBlogByIdAPI = async (blogId) => {
  return await axiosAPI.get(`/blogs/${blogId}`);
};
