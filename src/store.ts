import Vue from 'vue';
import Vuex from 'vuex';

import { Activity } from '@/models/Activity';
import { ActivityError } from '@/models/ActivityError';
import { getActivity } from '@/services';

Vue.use(Vuex);

export interface State {
  randomActivity?: Activity | ActivityError;
  savedActivities: Activity[];
}

export default new Vuex.Store({
  state: {
    randomActivity: undefined,
    savedActivities: [],
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
    saveActivity(state) {
      if (!state.randomActivity || state.randomActivity.error) {
        state.randomActivity = {
          error: 'Unable to save this activity',
        } as ActivityError;
      } else if (
        state.savedActivities.includes(state.randomActivity as Activity)
      ) {
        state.randomActivity = {
          error: 'Activity already saved',
        } as ActivityError;
      } else {
        state.savedActivities.push(state.randomActivity as Activity);
      }
    },
    checkActivity(state, activity: Activity) {
      const i = state.savedActivities.findIndex((a) => a === activity);
      if (i >= 0) {
        Vue.set(state.savedActivities, i, {
          ...state.savedActivities[i],
          done: !state.savedActivities[i].done,
        });
      }
    },
  },
  actions: {
    async getActivity({ state, commit }, payload) {
      const randomActivity = await getActivity(payload);
      commit('updateRandomActivity', randomActivity);
    },
  },
});
