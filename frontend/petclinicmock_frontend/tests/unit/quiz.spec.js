import { shallowMount, createLocalVue } from '@vue/test-utils';
import QuizDetail from '../../src/views/quiz-detail.vue'; 

// 创建一个本地 Vue 实例
const localVue = createLocalVue();

describe('QuizDetail.vue', () => {
  let wrapper;

  beforeEach(() => {
    // 使用 shallowMount 创建组件的包装器
    wrapper = shallowMount(QuizDetail, {
      localVue,
      data() {
        return {
          // 模拟组件中的数据
          name: 'John Doe',
          quizName: 'Sample Quiz',
          totalCredits: 100,
          currentProb: 0,
          probs: [
            { probCredit: 10, probText: 'Sample question 1', probImg: 'img1.jpg' },
            { probCredit: 20, probText: 'Sample question 2', probImg: 'img2.jpg' }
          ],
          ans: {}
        };
      },
    });
  });

  it('renders quiz name and total credits correctly', () => {
    // 检查是否正确渲染了题目名称和总积分
    expect(wrapper.find('.quiz-detail-text04').text()).toBe('Sample Quiz');
    expect(wrapper.find('.heading2').text()).toBe('Total Credit: 100');
  });

  it('renders current problem correctly', () => {
    // 检查当前问题的题目、图片和答案选择框是否正确渲染
    expect(wrapper.find('.quiz-detail-hero-heading1').text()).toContain('Question 1');
    expect(wrapper.find('.quiz-detail-text22').text()).toContain('(10分)');
    expect(wrapper.find('.quiz-detail-image').attributes('src')).toBe('img1.jpg');
    expect(wrapper.find('.quiz-detail-select').exists()).toBe(true);
  });

  it('emits events when last, next, and submit buttons are clicked', async () => {
    // 模拟点击事件并验证是否正确触发了事件
    await wrapper.find('.quiz-detail-navlink2').trigger('click'); // Last Question
    expect(wrapper.emitted('lastProb')).toBeTruthy();

    await wrapper.find('.quiz-detail-navlink2').trigger('click'); // Next Question
    expect(wrapper.emitted('nextProb')).toBeTruthy();

    await wrapper.find('.quiz-detail-navlink2').trigger('click'); // Submit
    expect(wrapper.emitted('submit')).toBeTruthy();
  });
});
