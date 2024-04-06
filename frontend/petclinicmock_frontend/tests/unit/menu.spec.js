import { shallowMount } from '@vue/test-utils';
import Menu from '../../src/views/menu.vue'; // 假设组件路径是这样的

describe('Menu.vue', () => {
  it('renders menu header with correct content', () => {
    const wrapper = shallowMount(Menu, {
      data() {
        return {
          name: 'John Doe', // 模拟组件中的数据
        };
      },
    });

    // 检查是否渲染了正确的内容
    expect(wrapper.find('.menu-text02').text()).toBe('John Doe');
  });

  it('emits logout event when logout button is clicked', async () => {
    const wrapper = shallowMount(Menu);

    // 模拟点击事件
    await wrapper.find('.buttonFilled').trigger('click');

    // 检查是否触发了 logout 事件
    expect(wrapper.emitted('logout')).toBeTruthy();
  });
});
