import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 0,
  },
  getters: {},
  mutations: {
    incrementar(state) {
      state.count++;
    },
    decrementar(state) {
      state.count--;
    },
  },
  actions: {},
  modules: {},
});
