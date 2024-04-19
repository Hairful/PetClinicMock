import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import CaseStudyMenu from '@/views/case-study-menu.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter({
  routes: [{ path: '/', component: CaseStudyMenu }],
});

describe('CaseStudyMenu.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CaseStudyMenu, {
      localVue,
      router,
    });
  });

  it('renders correctly', () => {
    // Check if the component is rendered
    expect(wrapper.exists()).toBe(true);
  });

  it('renders user name', () => {
    // Check if the user name is rendered
    const userName = wrapper.find('.case-study-menu-text02');
    expect(userName.exists()).toBe(true);
  });

  it('renders logout button for logged-in user', () => {
    // Check if the logout button is rendered
    const logoutButton = wrapper.find('.buttonFilled');
    expect(logoutButton.exists()).toBe(true);
  });

  it('renders search input', () => {
    // Check if the search input is rendered
    // Replace '.search-input' with the actual class or id of the search input
    const searchInput = wrapper.find('.rounded-input');
    expect(searchInput.exists()).toBe(true);
  });
});