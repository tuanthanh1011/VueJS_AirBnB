import { createStore } from "vuex";
import location from "./modules/location.js";
import room from "./modules/room.js";
import auth from "./modules/auth.js";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
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
  },
});
