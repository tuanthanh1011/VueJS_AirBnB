import { createStore } from "vuex";
import location from "./modules/location.js";
import room from "./modules/room.js";
import auth from "./modules/auth.js";
import blog from "./modules/blog.js";
import booking from "./modules/booking.js";
import review from "./modules/review.js";
export default createStore({
  state: {
    showFooter: true,
    isValidFormSignUp: true,
    isLoading: false,
    infoAlertBox: {
      isVisible: false,
      message: "",
      status: "Success",
    },
  },
  getters: {},
  mutations: {
    setShowFooter: (state, payload) => {
      state.showFooter = payload;
    },

    setLoading: (state, payload) => {
      state.isLoading = payload;
    },

    setAlertBox: (state, payload) => {
      state.infoAlertBox = payload;
    },
  },
  actions: {},
  modules: {
    location: {
      ...location,
      namespaced: true,
    },
    room: {
      ...room,
      namespaced: true,
    },
    auth: {
      ...auth,
      namespaced: true,
    },
    blog: {
      ...blog,
      namespaced: true,
    },
    booking: {
      ...booking,
      namespaced: true,
    },
    review: {
      ...review,
      namespaced: true,
    },
  },
});
