import { shallowMount } from '@vue/test-utils'
import Home from '@/views/home.vue'
import VueRouter from 'vue-router'

describe('Home.vue', () => {
  let wrapper;

  beforeEach(() => {
    const router = new VueRouter({
      routes: [
        { path: '/login', component: { template: '<div>Login</div>' } },
        { path: '/register', component: { template: '<div>Register</div>' } },
      ],
    });

    wrapper = shallowMount(Home, {
      global: {
        plugins: [router],
      },
    });
  });

  it('renders correctly', () => {
    // Check if the component is rendered
    expect(wrapper.exists()).toBe(true);
  });

  it('has a link to the login page', () => {
    const link = wrapper.find('.home-login');
    expect(link.attributes().to).toBe('/login');
  });

  it('has a link to the register page', () => {
    const link = wrapper.find('.home-register');
    expect(link.attributes().to).toBe('/register');
  });
});