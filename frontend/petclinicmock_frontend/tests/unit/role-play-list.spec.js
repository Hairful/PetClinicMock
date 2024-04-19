import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import RolePlayList from '@/views/role-play-list.vue'; // Update this with the actual path to your component

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('RolePlayList.vue', () => {
    it('renders login button when not logged in', () => {
        const wrapper = shallowMount(RolePlayList, {
            localVue,
            router,
            data() {
                return {
                    loggedIn: false,
                };
            },
        });
        expect(wrapper.find('button').exists()).toBe(true);
    });
});