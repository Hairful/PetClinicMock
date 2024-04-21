import { shallowMount } from '@vue/test-utils';
import Register from '@/views/Register.vue';
import axios from 'axios';

// Mocking axios post request
jest.mock('axios', () => ({
  post: jest.fn(),
}));

describe('Register.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Register);
  });

  afterEach(() => {
    wrapper.destroy();
  });


  it('refreshes captcha when refreshCode method is called', () => {
    const initialCaptcha = wrapper.vm.identifyCode;

    // Call refreshCode method
    wrapper.vm.refreshCode();

    // Assert that captcha is refreshed
    expect(wrapper.vm.identifyCode).not.toEqual(initialCaptcha);
  });
});
