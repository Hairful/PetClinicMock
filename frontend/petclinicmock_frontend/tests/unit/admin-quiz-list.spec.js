import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import axios from 'axios';
import ElementUI from 'element-ui';
import AdminQuizList from '@/views/admin-quiz-list.vue';

jest.mock('axios');

const localVue = createLocalVue();
localVue.use(ElementUI);
localVue.use(VueRouter);
const router = new VueRouter({
  routes: [{ path: '/', component: AdminQuizList }],
});

describe('AdminQuizList.vue', () => {
  let wrapper;
  const mockData = {
    status: 0,
    data: [
      {
        quizID: '1',
        quizName: 'Test Quiz',
      },
    ],
  };

  beforeEach(async () => {
    axios.get.mockResolvedValue({ data: mockData });

    wrapper = mount(AdminQuizList, {
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
    const userName = wrapper.find('.admin-quiz-list-text02');
    expect(userName.exists()).toBe(true);
  });

  it('renders logout button for logged-in user', () => {
    // Check if the logout button is rendered
    const logoutButton = wrapper.find('.buttonFilled');
    expect(logoutButton.exists()).toBe(true);
  });
});