const moduleLocation = {
  state: () => ({
    locationList: [
      {
        id: 2,
        name: "Hạ Long",
        province: "Quảng Ninh",
        country: "Việt Nam",
      },
      {
        id: 3,
        name: "Huế",
        province: "Thừa Thiên Huế",
        country: "Việt Nam",
      },
      {
        id: 4,
        name: "Đà Nẵng",
        province: "Đà Nẵng",
        country: "Việt Nam",
      },
      {
        id: 5,
        name: "Hội An",
        province: "Quảng Nam",
        country: "Việt Nam",
      },
      {
        id: 6,
        name: "Sapa",
        province: "Lào Cai",
        country: "Việt Nam",
      },
      {
        id: 7,
        name: "Nha Trang",
        province: "Khánh Hòa",
        country: "Việt Nam",
      },
      {
        id: 8,
        name: "Đà Lạt",
        province: "Lâm Đồng",
        country: "Việt Nam",
      },
    ],

    keywordSeach: "",
  }),
  mutations: {
    setKeywordSearchMutation(state, payload) {
      state.keywordSeach = payload;
    },
  },
  actions: {
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
