
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LottieVuePlayer from '@lottiefiles/vue-lottie-player'
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(LottieVuePlayer)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios;
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

axios.interceptors.request.use((config) => {
  if(localStorage.getItem('Token')) {
    config.headers.Authorization = localStorage.getItem('Token')
  }
  return config;
}, (error) => {
  return Promise.reject(error);
})

axios.interceptors.response.use(
  response => {
      return response;
  },
  error => {
      if (error.response) {
          switch (error.response.status) {
              case 401:
                  // 返回 401 清除token信息并跳转到登录页面
                  localStorage.clear();
                  router.replace({
                      path: 'login',
                      query: {redirect: router.currentRoute.fullPath}
                  })
              case 403:
                window.alert("无对应权限");
                router.replace({
                  path: 'menu',
                  query: {redirect: router.currentRoute.fullPath}
              })
              
          }
      }
      return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  });