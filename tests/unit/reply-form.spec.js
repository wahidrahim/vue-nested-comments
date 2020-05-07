import { shallowMount } from '@vue/test-utils';
import ReplyForm from '@/components/ReplyForm';

describe('ReplyForm.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(ReplyForm);

    expect(wrapper.find('form').text()).toMatch(/reply/i);
  });
});
