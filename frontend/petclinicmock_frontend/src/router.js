import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Register from './views/register'
import Login from './views/login'
import Home from './views/home'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Register',
      path: '/register',
      component: Register,
    },
    {
      name: 'Login',
      path: '/login',
      component: Login,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
