const moduleAuth = {
  state: () => ({
    userList: [
      {
        address: "Cầu Diễn",
        birthday: "1970/1/1",
        email: "admin",
        gender: true,
        name: "admin",
        password: "123",
        phone: "0968572936",
        type: "ADMIN",
      },
    ],
    registerUser: {},
    userLogin: {},
  }),
  mutations: {
    setUserRegisterMutation(state, payload) {
      // state.userRegister = payload;

      state.userList.push(payload);
    },

    setUserLoginMutation(state, payload) {
      state.userLogin = payload;
      localStorage.setItem("userLogin", JSON.stringify(payload));
    },

    setUserLoginFromLocalStorage(state, payload) {
      console.log(payload);
      state.userLogin = payload;
    },

    loginUserMutation(state, payload) {
      const { data, router } = payload;
      const { email, password } = data;
      const userLogin = state.userList.find(
        (user) => user.email === email && user.password === password
      );
      if (userLogin == undefined) {
        localStorage.setItem("userLogin", JSON.stringify(userLogin));
        state.userLogin = {
          message: "Tài khoản không chính xác",
          user: null,
        };
      } else {
        state.userLogin = {
          message: "Đăng nhập thành công",
          user: userLogin,
        };
        router.push("/");
      }
    },
  },
  actions: {
    signUpAction({ commit }, { data, router }) {
      const userRegister = data;
      router.push("/sign-in");
      commit("setUserRegisterMutation", userRegister);
    },

    signInAction({ commit }, { data, router }) {
      router.push("/");
      commit("setUserLoginMutation", data);
    },

    loadUserLoginFromLocalStorageAction({ commit }) {
      let userLogin = {};
      console.log(localStorage.getItem("userLogin"));
      if (localStorage.getItem("userLogin")) {
        userLogin = JSON.parse(localStorage.getItem("userLogin"));
      }
      commit("setUserLoginFromLocalStorage", userLogin);
    },
  },
};

export default moduleAuth;
