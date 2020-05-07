import { shallowMount } from '@vue/test-utils';
import VoteButtons from '@/components/VoteButtons';

describe('VoteButtons.vue', () => {
  it('shows upvotes and downvotes', () => {
    const upvotes = 123;
    const downvotes = -44;
    const wrapper = shallowMount(VoteButtons, {
      propsData: {
        upvotes,
        downvotes,
      },
    });

    expect(wrapper.find('.vote-buttons .upvote .points').text()).toMatch(
      upvotes.toString()
    );
    expect(wrapper.find('.vote-buttons .downvote .points').text()).toMatch(
      downvotes.toString()
    );
  });
});
