import {
  getAllBookingAPI,
  createBookingAPI,
  deleteBookingAPI,
} from "@/apis/booking";
const moduleBooking = {
  state: () => ({
    bookingList: [],
    bookingListByUser: [],
  }),
  mutations: {
    setAllBookingMutation(state, payload) {
      state.bookingList = payload;
    },

    setBookingByUserMutation(state, payload) {
      state.bookingListByUser = state.bookingList.filter((booking) => {
        return booking.user.id == payload;
      });
    },
  },
  actions: {
    async getAllBookingAction({ commit }) {
      const bookingList = await getAllBookingAPI();
      commit("setAllBookingMutation", bookingList);
    },

    getBookingByUserAction({ commit }, payload) {
      commit("setBookingByUserMutation", payload);
    },

    async deleteBookingAction(context, payload) {
      const { bookingId, idUser } = payload;
      await deleteBookingAPI(bookingId);
      await context.dispatch("getAllBookingAction");
      await context.dispatch("getBookingByUserAction", idUser);
    },

    async bookingAction(context, payload) {
      await createBookingAPI(payload);
    },
  },
};

export default moduleBooking;
