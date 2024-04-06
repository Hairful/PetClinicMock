import { mount, createLocalVue } from '@vue/test-utils';
import Login from '../../src/views/login.vue';
import axios from 'axios';

// 创建本地Vue实例
const localVue = createLocalVue();

describe('YourComponent', () => {
  let wrapper;

  beforeEach(() => {
    // 渲染组件
    wrapper = mount(Login, {
      localVue,
    });
  });

  it('calls login method on submit if validation passes', async () => {
    // 模拟验证通过
    wrapper.vm.$refs.formLogin.validate = jest.fn().mockImplementationOnce(cb => cb(true));

    // 模拟axios.post的响应
    axios.post = jest.fn().mockResolvedValue({ data: { status: 0 } });

    // 点击提交按钮
    await wrapper.vm.submit();

    // 验证login方法被调用
    expect(wrapper.vm.login).toHaveBeenCalled();
  });

  it('displays error message if validation fails', async () => {
    // 模拟验证失败
    wrapper.vm.$refs.formLogin.validate = jest.fn().mockImplementationOnce(cb => cb(false));

    // 点击提交按钮
    await wrapper.vm.submit();

    // 验证错误消息是否被显示
    expect(wrapper.vm.$message.warning).toHaveBeenCalledWith('验证码错误');
  });
});
