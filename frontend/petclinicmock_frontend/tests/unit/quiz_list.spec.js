import { shallowMount, createLocalVue } from '@vue/test-utils';
import Quizlist from '../../src/views/quiz-list.vue'; // 假设组件路径是这样的

// 创建一个本地 Vue 实例
const localVue = createLocalVue();

describe('quiz-list.vue', () => {
  let wrapper;

  beforeEach(() => {
    // 使用 shallowMount 创建组件的包装器
    wrapper = shallowMount(Quizlist, {
      localVue,
      data() {
        return {
          name: 'John Doe', // 模拟组件中的数据
          quizzes: [
            {
              quizID: 1,
              quizName: 'Sample Quiz 1',
              totalCredits: 100,
              lastTry: 'Success',
              lastTryTime: '2024-04-06'
            },
            {
              quizID: 2,
              quizName: 'Sample Quiz 2',
              totalCredits: 150,
              lastTry: 'Fail',
              lastTryTime: '2024-04-05'
            }
          ]
        };
      },
    });
  });

  it('renders quiz list correctly', () => {
    // 检查是否正确渲染了两个测试数据的内容
    const quizItems = wrapper.findAll('.quiz-list-li');
    expect(quizItems.length).toBe(2);

    // 检查第一个测试数据是否正确渲染
    const firstQuizItem = quizItems.at(0);
    expect(firstQuizItem.find('.quiz-list-navlink1').text()).toBe('Quiz 1');
    expect(firstQuizItem.find('.quiz-list-text19').text()).toContain('Sample Quiz 1');
    expect(firstQuizItem.find('.quiz-list-text19').text()).toContain('Total Credits: 100');
    expect(firstQuizItem.find('.quiz-list-text20').text()).toContain('Last Try: Success');
    expect(firstQuizItem.find('.quiz-list-text19').text()).toContain('Last Try Time: 2024-04-06');

    // 检查第二个测试数据是否正确渲染
    const secondQuizItem = quizItems.at(1);
    expect(secondQuizItem.find('.quiz-list-navlink1').text()).toBe('Quiz 2');
    expect(secondQuizItem.find('.quiz-list-text19').text()).toContain('Sample Quiz 2');
    expect(secondQuizItem.find('.quiz-list-text19').text()).toContain('Total Credits: 150');
    expect(secondQuizItem.find('.quiz-list-text20').text()).toContain('Last Try: Fail');
    expect(secondQuizItem.find('.quiz-list-text19').text()).toContain('Last Try Time: 2024-04-05');
  });
});
