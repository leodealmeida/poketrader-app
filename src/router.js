import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import('./views/calculator/Calculator')
    }
  ]
});