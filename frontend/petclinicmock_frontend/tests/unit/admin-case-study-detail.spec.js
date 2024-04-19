import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import axios from 'axios';
import ElementUI from 'element-ui';
import AdminCaseStudyDetail from '@/views/admin-case-study-detail.vue';

jest.mock('axios');

const localVue = createLocalVue();
localVue.use(ElementUI);
localVue.use(VueRouter);
const router = new VueRouter({
  routes: [{ path: '/', component: AdminCaseStudyDetail }],
});

describe('AdminCaseStudyDetail.vue', () => {
  let wrapper;
  const mockData = {
    status: 0,
    data: {
        diseaseDetail: {
            diseaseIntro: 'Test Disease Intro',
            diseaseSymptoms: 'Test Disease Symptoms',
            diseaseDiagnosis: 'Test Disease Diagnosis',
            diseaseTreatment: 'Test Disease Treatment',
        },
        caseItem: {
            details: {
                summaryVideos: ['video1.mp4', 'video2.mp4'],
                examine: 'Test Examine',
                examinePictures: ['image1.jpg', 'image2.jpg'],
                examineVideos: ['video3.mp4', 'video4.mp4'],
                diagnose: 'Test Diagnose',
                diagnosePictures: ['image3.jpg', 'image4.jpg'],
            },
        },
    },
  };

  beforeEach(async () => {
    axios.get.mockResolvedValue(mockData);

    wrapper = mount(AdminCaseStudyDetail, {
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
    const userName = wrapper.find('.admin-case-study-detail-text002');
    expect(userName.exists()).toBe(true);
  });

  it('renders logout button for logged-in user', () => {
    // Check if the logout button is rendered
    const logoutButton = wrapper.find('.buttonFilled');
    expect(logoutButton.exists()).toBe(true);
  });
});