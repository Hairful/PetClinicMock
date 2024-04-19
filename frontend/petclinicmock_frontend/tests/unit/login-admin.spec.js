import { shallowMount } from '@vue/test-utils'
import LoginAdmin from '@/views/login-admin.vue'
import VueRouter from 'vue-router'

describe('LoginAdmin.vue', () => {
  let wrapper;

  beforeEach(() => {
    const router = new VueRouter({
      routes: [
        { path: '/login', component: { template: '<div>Login</div>' } },
        { path: '/register', component: { template: '<div>Register</div>' } },
      ],
    });

    wrapper = shallowMount(LoginAdmin, {
      global: {
        plugins: [router],
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('has a link to the login page', () => {
    const link = wrapper.find('.login-admin-login');
    expect(link.attributes().to).toBe('/login');
  });

  it('has a link to the register page', () => {
    const link = wrapper.find('.login-admin-register');
    expect(link.attributes().to).toBe('/register');
  });
});