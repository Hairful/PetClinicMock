import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import RolePlayDetail from './views/role-play-detail'
import AdminQuizList from './views/admin-quiz-list'
import Register from './views/register'
import QuizList from './views/quiz-list'
import CaseStudyList from './views/case-study-list'
import Home from './views/home'
import LoginAdmin from './views/login-admin'
import RolePlayMenu from './views/role-play-menu'
import Menu from './views/menu'
import AdminQuizDetail from './views/admin-quiz-detail'
import VirtualTour from './views/virtual-tour'
import AdminRolePlayMenu from './views/admin-role-play-menu'
import AdminVirtualTour from './views/admin-virtual-tour'
import RolePlayList from './views/role-play-list'
import QuizDetail from './views/quiz-detail'
import CaseStudyDetail from './views/case-study-detail'
import AdminCaseStudyList from './views/admin-case-study-list'
import Page from './views/page'
import QuizResult from './views/quiz-result'
import AdminRolePlayList from './views/admin-role-play-list'
import AdminMenu from './views/admin-menu'
import AdminCaseStudyDetail from './views/admin-case-study-detail'
import CaseStudyMenu from './views/case-study-menu'
import Login from './views/login'
import AdminUser from './views/admin-user'
import AdminPharmacy from './views/admin-pharmacy.vue'
import AdminProbList from './views/admin-prob-list.vue'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'RolePlayDetail',
      path: '/role-play-detail',
      component: RolePlayDetail,
    },
    {
      name: 'AdminQuizList',
      path: '/admin-quiz-list',
      component: AdminQuizList,
    },
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
      name: 'QuizList',
      path: '/quiz-list',
      component: QuizList,
    },
    {
      name: 'CaseStudyList',
      path: '/case-study-list',
      component: CaseStudyList,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'LoginAdmin',
      path: '/login-admin',
      component: LoginAdmin,
    },
    {
      name: 'RolePlayMenu',
      path: '/role-play-menu',
      component: RolePlayMenu,
    },
    {
      name: 'Menu',
      path: '/menu',
      component: Menu,
    },
    {
      name: 'AdminQuizDetail',
      path: '/admin-quiz-detail',
      component: AdminQuizDetail,
    },
    {
      name: 'VirtualTour',
      path: '/virtual-tour',
      component: VirtualTour,
    },
    {
      name: 'AdminRolePlayMenu',
      path: '/admin-role-play-menu',
      component: AdminRolePlayMenu,
    },
    {
      name: 'AdminVirtualTour',
      path: '/admin-virtual-tour',
      component: AdminVirtualTour,
    },
    {
      name: 'RolePlayList',
      path: '/role-play-list',
      component: RolePlayList,
    },
    {
      name: 'QuizDetail',
      path: '/quiz-detail',
      component: QuizDetail,
    },
    {
      name: 'CaseStudyDetail',
      path: '/case-study-detail',
      component: CaseStudyDetail,
    },
    {
      name: 'AdminCaseStudyList',
      path: '/admin-case-study-list',
      component: AdminCaseStudyList,
    },
    {
      name: 'QuizResult',
      path: '/quiz-result',
      component: QuizResult,
    },
    {
      name: 'AdminRolePlayList',
      path: '/admin-role-play-list',
      component: AdminRolePlayList,
    },
    {
      name: 'AdminMenu',
      path: '/admin-menu',
      component: AdminMenu,
    },
    {
      name: 'AdminCaseStudyDetail',
      path: '/admin-case-study-detail',
      component: AdminCaseStudyDetail,
    },
    {
      name: 'CaseStudyMenu',
      path: '/case-study-menu',
      component: CaseStudyMenu,
    },
    {
      name: 'AdminUser',
      path: '/admin-user',
      component: AdminUser,
    },
    {
      name: 'AdminPharmacy',
      path: '/admin-pharmacy',
      component: AdminPharmacy,
    },
    {
      name: 'AdminProbList',
      path: '/admin-prob-list',
      component: AdminProbList,
    },
    {
      name: 'Page',
      path: '**',
      component: Page,
      fallback: true,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/register' || to.path === '/') {
    next();
  } else {
    let token = localStorage.getItem('Token');
    if (token === null || token === '') {
      next('/login');
    } else {
      if((to.path.indexOf('admin')!=-1) && !(localStorage.getItem('isAdmin')=='true'))
      {
        window.alert("无对应权限");
        next(from.path);
      }
      else
        next();
    }
  }
});

export default router