import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import CaseStudyList from '@/views/case-study-list.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter({
  routes: [{ path: '/', component: CaseStudyList }],
});

describe('CaseStudyList.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CaseStudyList, {
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
    const userName = wrapper.find('.case-study-list-text02');
    expect(userName.exists()).toBe(true);
  });

  it('renders logout button for logged-in user', () => {
    // Check if the logout button is rendered
    const logoutButton = wrapper.find('.buttonFilled');
    expect(logoutButton.exists()).toBe(true);
  });

  it('renders search input', () => {
    // Check if the search input is rendered
    const searchInput = wrapper.find('.rounded-input');
    expect(searchInput.exists()).toBe(true);
  });
});