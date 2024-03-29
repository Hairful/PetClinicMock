
import Vue from "vue";
import Vuex from "vuex";
// 加载storage模块：获取token，存储token
import { getItem, setItem } from "../utils/storage";
 
Vue.use(Vuex);
// 用户登陆后的token值
const TOKEN_KEY = "X-Token";
 
export default new Vuex.Store({
  // 处理用户 Token,定义容器当中数据
  state: {
    // 用户的登录状态信息，存储当前登录用户信息（token等数据）
    // 1. user: null || JSON.parse(window.localStorage.getItem(TOKEN_KEY))
    name:'123',
    token: '',
    LOADING: false, // vuex全局控制loading显示与隐藏
  },
  mutations: {
    setUser(state, data) {
      state.token = data;
      // 把数据备份到本地存储，防止vuex刷新丢失
      // window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
      localStorage.setItem(TOKEN_KEY, JSON.stringify(state.token))
    },
    showLoading(state) {
      state.LOADING = true;
    },
    hideLoading(state) {
      state.LOADING = false;
    },
  },
  actions: {},
  modules: {},
});