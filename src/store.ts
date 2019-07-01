import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {
    initializeStore(state) {
      // Replace the state object with the stored item
      this.replaceState(
        Object.assign(
          state,
          JSON.parse(localStorage.getItem('bored-app-store') || '{}')));
    },
  },
  actions: {

  },
});
