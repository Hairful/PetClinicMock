import { shallowMount, createLocalVue } from '@vue/test-utils';
import Home from '../../src/views/Home.vue'; // 假设组件路径是这样的

// 创建一个本地 Vue 实例
const localVue = createLocalVue();

describe('Home.vue', () => {
  let wrapper;

  beforeEach(() => {
    // 使用 shallowMount 创建组件的包装器
    wrapper = shallowMount(Home, {
      localVue,
    });
  });

  it('renders home header correctly', () => {
    // 检查是否正确渲染了头部的 PETCLINICMOCK 文字
    const logo = wrapper.find('.logo');
    expect(logo.exists()).toBe(true);
    expect(logo.text()).toBe('PETCLINICMOCK');

    // 检查是否正确渲染了登录和注册按钮
    const loginButton = wrapper.find('.home-login');
    const registerButton = wrapper.find('.home-register');
    expect(loginButton.exists()).toBe(true);
    expect(registerButton.exists()).toBe(true);
    expect(loginButton.text()).toBe('Login');
    expect(registerButton.text()).toBe('Register');
  });

  it('renders home footer correctly', () => {
    // 检查是否正确渲染了底部的版权信息和管理员登录链接
    const footer = wrapper.find('.home-footer1');
    expect(footer.exists()).toBe(true);

    const copyright = footer.find('.home-text14');
    expect(copyright.exists()).toBe(true);
    expect(copyright.text()).toContain('© 2024 SWD-G02');

    const adminLoginLink = footer.find('.home-navlink');
    expect(adminLoginLink.exists()).toBe(true);
    expect(adminLoginLink.text()).toBe('Admin Login');
    expect(adminLoginLink.attributes().to).toBe('/login-admin');
  });
});
