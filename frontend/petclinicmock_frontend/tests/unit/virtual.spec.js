import { mount } from '@vue/test-utils';
import VirtualTour from '../../src/views/virtual-tour.vue';

describe('VirtualTour', () => {
  let wrapper;

  beforeEach(() => {
    // 渲染组件
    wrapper = mount(VirtualTour);
  });

  it('renders the container correctly', () => {
    // 验证容器是否存在
    expect(wrapper.find('.container').exists()).toBe(true);
  });

  it('renders the map correctly', () => {
    // 验证地图是否存在
    expect(wrapper.find('.map').exists()).toBe(true);
  });

  it('renders the loading indicator correctly if progress is not 100', async () => {
    // 设置progress为50
    wrapper.setData({ progress: 50 });

    // 等待Vue更新
    await wrapper.vm.$nextTick();

    // 验证loading是否存在
    expect(wrapper.find('.loading').exists()).toBe(true);

    // 验证progress是否存在
    expect(wrapper.find('.progress').exists()).toBe(true);

    // 验证loading是否显示
    expect(wrapper.find('.loading').isVisible()).toBe(true);

    // 验证progress是否显示
    expect(wrapper.find('.progress').isVisible()).toBe(true);

    // 验证progress文本内容
    expect(wrapper.find('.progress span').text()).toContain('医院加载中：50%');
  });

  it('does not render the loading indicator if progress is 100', async () => {
    // 设置progress为100
    wrapper.setData({ progress: 100 });

    // 等待Vue更新
    await wrapper.vm.$nextTick();

    // 验证loading是否不存在
    expect(wrapper.find('.loading').exists()).toBe(false);

    // 验证progress是否不存在
    expect(wrapper.find('.progress').exists()).toBe(false);
  });

  it('renders the title correctly', () => {
    // 验证标题是否存在
    expect(wrapper.find('.title').exists()).toBe(true);

    // 验证标题文本内容
    expect(wrapper.find('.title').text()).toBe('3D导览');
  });
});
