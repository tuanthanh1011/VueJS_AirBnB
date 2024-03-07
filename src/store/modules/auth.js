import {
  getAllUserAccountAPI,
  createAUserAccountAPI,
  updateAUserAccountAPI,
} from "@/apis/auth";
const moduleAuth = {
  state: () => ({
    userList: [],
    registerUser: {},
    userLogin: {},
  }),
  mutations: {
    setUserRegisterMutation(state, payload) {
      state.userRegister = payload;
    },

    setUserLoginMutation(state, payload) {
      localStorage.setItem("userLogin", JSON.stringify(payload));
    },

    setUserLoginFromLocalStorage(state, payload) {
      state.userLogin = payload;
    },

    logoutMutation(state) {
      state.userLogin = {};
      localStorage.clear("userLogin");
    },
  },
  actions: {
    async signUpAction({ commit }, { data, router }) {
      const userRegister = await createAUserAccountAPI(data);
      router.push("/sign-in");
      commit("setUserRegisterMutation", userRegister);
    },

    async signInAction({ commit }, payload) {
      const { data, router } = payload;
      const { email, password } = data;
      const listUser = await getAllUserAccountAPI();

      const findUserLogin = listUser.find(
        (user) => user.email == email && user.password == password
      );

      if (findUserLogin) {
        commit("setUserLoginMutation", findUserLogin);
        router.push("/");
        return true;
      } else {
        return false;
      }
    },

    async updateAUserAction(context, payload) {
      const { id, data } = payload;
      console.log(id, data);
      const newInfoUser = await updateAUserAccountAPI(id, data);
      context.commit("setUserLoginMutation", newInfoUser);
    },

    logoutAction({ commit }) {
      commit("logoutMutation");
    },

    loadUserLoginFromLocalStorageAction({ commit }) {
      let userLogin = {};
      if (localStorage.getItem("userLogin")) {
        userLogin = JSON.parse(localStorage.getItem("userLogin"));
      }
      commit("setUserLoginFromLocalStorage", userLogin);
    },
  },
};

export default moduleAuth;
