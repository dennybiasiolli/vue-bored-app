import Vue from 'vue';
import App from './App.vue';
import './plugins/vuetify';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.commit('initializeStore');
  },
  render: (h) => h(App),
}).$mount('#app');

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem('bored-app-store', JSON.stringify({
    ...state,
    randomActivity: undefined,
  }));
});
