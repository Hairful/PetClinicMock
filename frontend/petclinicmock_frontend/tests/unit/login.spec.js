import { shallowMount } from '@vue/test-utils'
import Login from '@/views/login.vue'
import VueRouter from 'vue-router'

describe('Login.vue', () => {
  let wrapper;

  beforeEach(() => {
    const router = new VueRouter({
      routes: [
        { path: '/menu', component: { template: '<div>Menu</div>' } },
        { path: '/login', component: { template: '<div>Login</div>' } },
        { path: '/register', component: { template: '<div>Register</div>' } },
      ],
    });

    wrapper = shallowMount(Login, {
      global: {
        plugins: [router],
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('has a link to the menu page', () => {
    const link = wrapper.find('.login-logo');
    expect(link.attributes().to).toBe('/menu');
  });

  it('has a link to the login page', () => {
    const link = wrapper.find('.login-login');
    expect(link.attributes().to).toBe('/login');
  });

  it('has a link to the register page', () => {
    const link = wrapper.find('.login-register');
    expect(link.attributes().to).toBe('/register');
  });
});