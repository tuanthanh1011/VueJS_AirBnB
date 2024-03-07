import { getAllReviewAPI, createARoomAPI } from "@/apis/review";
const moduleBlog = {
  state: () => ({
    reviewList: [],
    reviewListByRoom: {},
  }),
  mutations: {
    setAllReviewMutation(state, payload) {
      state.reviewList = payload;
    },

    setReviewByRoomAction(state, payload) {
      state.reviewListByRoom = state.reviewList.filter(
        (review) => review.roomId == payload
      );
    },
  },
  actions: {
    async getAllReviewAction({ commit }) {
      const reviewList = await getAllReviewAPI();
      commit("setAllReviewMutation", reviewList);
    },

    getReviewByRoomAction({ commit }, payload) {
      commit("setReviewByRoomAction", payload);
    },

    async createReviewAction(context, payload) {
      await createARoomAPI(payload);
      await context.dispatch("getAllReviewAction");
      await context.dispatch("getReviewByRoomAction", payload.roomId);
    },
  },
};

export default moduleBlog;
