import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import axios from 'axios';
import ElementUI from 'element-ui';
import RolePlayDetail from '@/views/role-play-detail.vue'; // replace with actual path to component

jest.mock('axios');

const localVue = createLocalVue();
localVue.use(ElementUI);
localVue.use(VueRouter); // tell Vue to use VueRouter
const router = new VueRouter({
  routes: [{ path: '/', component: RolePlayDetail }],
});

describe('RolePlayDetail.vue', () => {
  it('renders correctly', async () => {
    const mockData = {
      status: 0,
      data: {
        message: 'Test Message',
      },
    };

    axios.get.mockResolvedValue({ data: mockData });

    const wrapper = mount(RolePlayDetail, {
      localVue,
      router,
      mocks: {
        $route: {
          params: {
            id: '1',
          },
        },
      },
    });

    await localVue.nextTick();

    // Check if the component is rendered
    expect(wrapper.exists()).toBe(true);
  });
});