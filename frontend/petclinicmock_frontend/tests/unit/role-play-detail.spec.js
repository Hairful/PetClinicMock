import { shallowMount } from '@vue/test-utils';
import RolePlayDetail from '@/views/role-play-detail.vue';
import VueRouter from 'vue-router';

describe('RolePlayDetail.vue', () => {
  let wrapper;
  let router;

  beforeEach(() => {
    global.localStorage = {
      getItem: jest.fn(() => 'mockToken'),
    };

    router = new VueRouter({
      routes: [{ path: '/', component: RolePlayDetail }],
    });

    wrapper = shallowMount(RolePlayDetail, {
      mocks: {
        $router: router,
        $route: {
          query: {}, // Add your mock query here if needed
        },
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });
});