import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import axios from 'axios';
import ElementUI from 'element-ui';
import RolePlayList from '@/views/role-play-list.vue';

jest.mock('axios');

const localVue = createLocalVue();
localVue.use(ElementUI);
localVue.use(VueRouter);
const router = new VueRouter({
  routes: [{ path: '/', component: RolePlayList }],
});

describe('RolePlayList.vue', () => {
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

    wrapper = mount(RolePlayList, {
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
    const userName = wrapper.find('.role-play-list-text02');
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