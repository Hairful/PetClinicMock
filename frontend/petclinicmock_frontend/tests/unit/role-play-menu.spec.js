import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import RolePlayMenu from '@/views/role-play-menu.vue'; // Update this with the actual path to your component

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('RolePlayMenu.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(RolePlayMenu, {
      localVue,
      router,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});