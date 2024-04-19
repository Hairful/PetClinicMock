import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import axios from 'axios';
import ElementUI from 'element-ui';
import AdminRolePlayMenu from '@/views/admin-role-play-menu.vue';

jest.mock('axios');

const localVue = createLocalVue();
localVue.use(ElementUI);
localVue.use(VueRouter);
const router = new VueRouter({
  routes: [{ path: '/', component: AdminRolePlayMenu }],
});

describe('AdminRolePlayMenu.vue', () => {
  let wrapper;
  const mockData = {
    status: 0,
    data: [
      {
        rolePlayID: '1',
        rolePlayName: 'Test Role Play',
      },
    ],
  };

  beforeEach(async () => {
    axios.get.mockResolvedValue({ data: mockData });

    wrapper = mount(AdminRolePlayMenu, {
      localVue,
      router,
    });

    await localVue.nextTick();
  });

  it('renders correctly', () => {
    // Check if the component is rendered
    expect(wrapper.exists()).toBe(true);
  });

  it('renders logged-in username', () => {
    // Check if the logged-in username is rendered
    const userName = wrapper.find('.admin-role-play-menu-text02');
    expect(userName.exists()).toBe(true);
  });

  it('renders logout button for logged-in user', () => {
    // Check if the logout button is rendered
    const logoutButton = wrapper.find('.buttonFilled');
    expect(logoutButton.exists()).toBe(true);
  });
});