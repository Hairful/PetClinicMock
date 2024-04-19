import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import axios from 'axios';
import ElementUI from 'element-ui';
import QuizList from '@/views/quiz-list.vue'; // replace with actual path to component

jest.mock('axios');

const localVue = createLocalVue();
localVue.use(ElementUI);
localVue.use(VueRouter); // tell Vue to use VueRouter
const router = new VueRouter({
  routes: [{ path: '/', component: QuizList }],
});

describe('QuizList.vue', () => {
  it('renders correctly', async () => {
    const mockData = {
      status: 0,
      data: [
        {
          quizID: '1',
          quizName: 'Test Quiz',
        },
      ],
    };

    axios.get.mockResolvedValue({ data: mockData });

    const wrapper = mount(QuizList, {
      localVue,
      router,
    });

    await localVue.nextTick();

    // Check if the component is rendered
    expect(wrapper.exists()).toBe(true);
  });
});