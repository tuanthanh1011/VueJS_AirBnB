import { getAllBlogAPI, getBlogByIdAPI } from "@/apis/blog";
const moduleBlog = {
  state: () => ({
    blogList: [],
    blogDetail: {},
  }),
  mutations: {
    setAllBlogMutation(state, payload) {
      state.blogList = payload;
    },

    setBlogByIdMutation(state, payload) {
      state.blogDetail = payload;
    },
  },
  actions: {
    async getAllBlogAction({ commit }) {
      const blogList = await getAllBlogAPI();
      commit("setAllBlogMutation", blogList);
    },

    async getBlogByIdAction({ commit }, payload) {
      const blogDetail = await getBlogByIdAPI(payload);
      commit("setBlogByIdMutation", blogDetail);
    },
  },
};

export default moduleBlog;
