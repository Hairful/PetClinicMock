import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import CaseStudyDetail from '@/views/case-study-detail.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

// Mock login function
const mockLogin = jest.fn().mockResolvedValue(true)

describe('CaseStudyDetail.vue', () => {
  let wrapper

  beforeEach(() => {
    // Use the mock login function
    mockLogin()

    wrapper = mount(CaseStudyDetail, {
      localVue,
      router,
      propsData: {
        caseItem: {
          summ2ary: 'Test summary',
          details: {
            summaryPictures: ['pic1.jpg', 'pic2.jpg'],
            summaryVideos: ['vid1.mp4', 'vid2.mp4'],
          }
        }
      }
    })
  })

  it('renders the component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders the login user text', () => {
    const loginUserText = wrapper.find('span').text()
    expect(loginUserText).toBe('登录用户：')
  })
})