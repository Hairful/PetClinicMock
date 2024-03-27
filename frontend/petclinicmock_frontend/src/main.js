
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
  router
}).$mount('#app')