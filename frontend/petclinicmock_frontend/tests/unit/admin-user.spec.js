import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import axios from 'axios';
import ElementUI from 'element-ui';
import AdminUser from '@/views/admin-user.vue';

jest.mock('axios');

const localVue = createLocalVue();
localVue.use(ElementUI);
localVue.use(VueRouter);
const router = new VueRouter({
  routes: [{ path: '/admin/user', component: AdminUser }],
});

describe('AdminUser.vue', () => {
  let wrapper;
  const mockData = {
    status: 200,
    data: [
      {
        userID: '1',
        userName: 'Test User',
        isAdmin: true,
      },
    ],
  };

  beforeEach(async () => {
    axios.get.mockResolvedValue({ data: mockData });

    wrapper = mount(AdminUser, {
      localVue,
      router,
    });

    await localVue.nextTick();
  });

  it('renders correctly', () => {
    // Check if the component is rendered
    expect(wrapper.exists()).toBe(true);
  });

  it('renders user name', () => {
    // Check if the user name is rendered
    const userName = wrapper.find('.admin-user-text02');
    expect(userName.exists()).toBe(true);
  });

  it('renders logout button for logged-in user', () => {
    // Check if the logout button is rendered
    const logoutButton = wrapper.find('.buttonFilled');
    expect(logoutButton.exists()).toBe(true);
  });
});