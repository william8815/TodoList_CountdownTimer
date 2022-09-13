import { createStore } from "vuex";

export default createStore({
  state: {
    list: {
      id: "",
      title: "請選擇清單項目",
    },
  },
  getters: {},
  mutations: {
    changeTitle(state, currnetList) {
      state.list = {
        ...currnetList,
      };
    },
  },
  actions: {},
  modules: {},
});
