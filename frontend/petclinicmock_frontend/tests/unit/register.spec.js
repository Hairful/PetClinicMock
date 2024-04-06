import { shallowMount } from '@vue/test-utils';
import Register from '../../src/views/register.vue'; // 你的组件文件路径
import axios from 'axios';

jest.mock('axios'); // 模拟 Axios

describe('Register', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Register);
  });

  afterEach(() => {
    jest.clearAllMocks(); // 清除所有的模拟函数调用和实例化
  });

  it('registers successfully with valid input and correct captcha', async () => {
    // 模拟验证码生成
    wrapper.setData({ identifyCode: '1234' });

    // 模拟用户输入
    wrapper.setData({
      formLogin: {
        name: 'testuser',
        password: 'testpassword',
        code: '1234' // 正确的验证码
      }
    });

    // 模拟注册请求的响应
    const responseData = { status: 0 };
    axios.post.mockResolvedValue({ data: responseData });

    // 调用注册方法
    await wrapper.vm.register();

    // 断言：应该成功跳转到登录页面
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/login');
  });

  it('handles registration failure with valid input and incorrect captcha', async () => {
    // 模拟验证码生成
    wrapper.setData({ identifyCode: '1234' });

    // 模拟用户输入
    wrapper.setData({
      formLogin: {
        name: 'testuser',
        password: 'testpassword',
        code: '5678' // 错误的验证码
      }
    });

    // 调用注册方法
    await wrapper.vm.register();

    // 断言：应该弹出错误消息并重置验证码
    expect(wrapper.vm.$message.warning).toHaveBeenCalledWith('The username has been used.');
    expect(wrapper.vm.refreshCode).toHaveBeenCalled();
  });

  // 其他测试用例...
});
