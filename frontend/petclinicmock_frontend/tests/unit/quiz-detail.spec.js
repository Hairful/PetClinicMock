import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import axios from 'axios';
import ElementUI from 'element-ui';
import QuizDetail from '@/views/quiz-detail.vue'; // replace with actual path to component

jest.mock('axios');

const localVue = createLocalVue();
localVue.use(ElementUI);
localVue.use(VueRouter); // tell Vue to use VueRouter
const router = new VueRouter({
  routes: [{ path: '/', component: QuizDetail }],
});

describe('QuizDetail.vue', () => {
  it('renders correctly', async () => {
    const mockData = {
      status: 0,
      data: {
        quizName: 'Test Quiz',
        questions: [],
      },
    };

    axios.get.mockResolvedValue({ data: mockData });

    const wrapper = mount(QuizDetail, {
      localVue,
      router,
      mocks: {
        $route: {
          params: {
            id: '1',
          },
        },
      },
    });

    await localVue.nextTick();

    // Check if the component is rendered
    expect(wrapper.exists()).toBe(true);
  });
});