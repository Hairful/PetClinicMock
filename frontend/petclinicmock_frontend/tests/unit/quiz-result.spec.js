import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import axios from 'axios';
import ElementUI from 'element-ui';
import QuizResult from '@/views/quiz-result.vue'; // replace with actual path to component

jest.mock('axios');

const localVue = createLocalVue();
localVue.use(ElementUI);
localVue.use(VueRouter); // tell Vue to use VueRouter
const router = new VueRouter({
  routes: [{ path: '/', component: QuizResult }],
});

describe('QuizResult.vue', () => {
  it('renders correctly', async () => {
    const mockData = {
      status: 0,
      probs: [],
      quizName: 'Test Quiz',
      totalCredits: 100,
      lastTry: 50,
    };

    axios.get.mockResolvedValue({ data: mockData });

    const wrapper = mount(QuizResult, {
      localVue,
      router,
      propsData: {
        quizID: '1',
      },
      mocks: {
        $route: {
          query: {
            quizID: '1',
          },
        },
      },
    });

    await localVue.nextTick();

    // Check if the component is rendered
    expect(wrapper.exists()).toBe(true);
  });
});