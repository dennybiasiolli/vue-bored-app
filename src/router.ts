import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/activities',
    },
    {
      path: '/activities',
      name: 'activities',
      // route level code-splitting
      // this generates a separate chunk (activities.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "activities" */ './views/Activities.vue'),
    },
    {
      path: '/my-list',
      name: 'my-list',
      // route level code-splitting
      // this generates a separate chunk (mylist.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "mylist" */ './views/MyList.vue'),
    },
  ],
});
