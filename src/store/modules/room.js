import { getRoomListAPI, getRoomByIdAPI } from "@/apis/room";

const moduleRoom = {
  state: () => ({
    roomList: [],
    roomDetail: {},
  }),
  mutations: {
    setRoomListByLocationAction(state, { locationId, data }) {
      state.roomList = data.filter((room) => room.location.id == locationId);
    },

    setRoomDetailMutaion(state, payload) {
      state.roomDetail = payload;
    },
  },
  actions: {
    async getRoomListByLocationAction(context, payload) {
      const listRooms = await getRoomListAPI();
      context.commit("setRoomListByLocationAction", {
        locationId: payload,
        data: listRooms,
      });
    },

    async getRoomDetailAction(context, payload) {
      const roomDetail = await getRoomByIdAPI(payload);
      context.commit("setRoomDetailMutaion", roomDetail);
    },
  },
  getters: {},
};

export default moduleRoom;
