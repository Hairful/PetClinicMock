import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import axios from 'axios';
import ElementUI from 'element-ui';
import AdminCaseStudyList from '@/views/admin-case-study-list.vue';

jest.mock('axios');

const localVue = createLocalVue();
localVue.use(ElementUI);
localVue.use(VueRouter);
const router = new VueRouter({
  routes: [{ path: '/', component: AdminCaseStudyList }],
});

describe('AdminCaseStudyList.vue', () => {
  let wrapper;
  const mockData = {
    status: 0,
    data: [
      {
        diseaseID: '1',
        diseaseName: 'Test Disease',
        diseaseType: 'Test Type',
      },
    ],
  };

  beforeEach(async () => {
    axios.get.mockResolvedValue({ data: mockData });

    wrapper = mount(AdminCaseStudyList, {
      localVue,
      router,
    });

    await localVue.nextTick();
  });

  it('renders correctly', () => {
    // Check if the component is rendered
    expect(wrapper.exists()).toBe(true);
  });

  it('renders logged-in username', () => {
    // Check if the logged-in username is rendered
    const userName = wrapper.find('.admin-case-study-list-text02'); // replace with actual class
    expect(userName.exists()).toBe(true);
  });

  it('renders logout button for logged-in user', () => {
    // Check if the logout button is rendered
    const logoutButton = wrapper.find('.buttonFilled'); // replace with actual class
    expect(logoutButton.exists()).toBe(true);
  });
});