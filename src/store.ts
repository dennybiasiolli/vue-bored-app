import Vue from 'vue';
import Vuex from 'vuex';

import { Activity } from '@/models/Activity';
import { ActivityError } from '@/models/ActivityError';
import { getActivity } from '@/services';

Vue.use(Vuex);

export interface State {
  randomActivity?: Activity | ActivityError;
}

export default new Vuex.Store({
  state: {
    randomActivity: undefined,
  } as State,
  mutations: {
    initializeStore(state) {
      // Replace the state object with the stored item
      this.replaceState(
        Object.assign(
          state,
          JSON.parse(localStorage.getItem('bored-app-store') || '{}')));
    },
    updateRandomActivity(state, randomActivity: Activity) {
      state.randomActivity = randomActivity;
    },
  },
  actions: {
    async getActivity({ state, commit }, payload) {
      const randomActivity = await getActivity(payload);
      commit('updateRandomActivity', randomActivity);
    },
  },
});
