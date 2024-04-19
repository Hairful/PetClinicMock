import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter, { RouterLink } from 'vue-router'
import Register from '@/views/register.vue' // replace with the actual path to your Register.vue file

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('Register.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Register, {
      localVue,
      router,
      stubs: {
        'ValidCode': {
            template: '<div />',
            methods: {
              drawPic: jest.fn(), // Mock the drawPic method
            },
          },
        RouterLink: true,
      }
    })
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has a register-textinput element', async () => {
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.register-textinput').exists()).toBe(true);
  });
})