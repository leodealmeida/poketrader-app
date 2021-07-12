import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      alias: "/home",
      name: "home",
      component: () => import('./views/Home')
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import('./views/calculator/Calculator')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('./views/history/History')
    }
  ]
});