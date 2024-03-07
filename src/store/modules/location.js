import { getLocationListAPI } from "@/apis/location";
const moduleLocation = {
  state: () => ({
    locationList: [],
    keywordSeach: "",
  }),
  mutations: {
    setKeywordSearchMutation(state, payload) {
      state.keywordSeach = payload;
    },

    setAllLocationMutation(state, payload) {
      state.locationList = payload;
    },
  },
  actions: {
    async getAllLocationAction({ commit }) {
      const listLocation = await getLocationListAPI();
      commit("setAllLocationMutation", listLocation);
    },
    updateKeywordSearchAction(context, payload) {
      context.commit("setKeywordSearchMutation", payload);
    },
  },
  getters: {
    getLocationBySearch(state) {
      return state.locationList.filter((location) => {
        return location.name.includes(state.keywordSeach);
      });
    },
  },
};

export default moduleLocation;
