import { shallowMount } from '@vue/test-utils';

import VoteButtons from '@/components/Comment/ActionButtons/VoteButtons';

const propsData = {
  upvotes: 123,
  downvotes: -44,
};

describe('VoteButtons.vue', () => {
  it('shows upvotes and downvotes', () => {
    const wrapper = shallowMount(VoteButtons, {
      propsData,
    });

    expect(wrapper.find('.vote-buttons .upvote .points').text()).toMatch(
      propsData.upvotes.toString()
    );
    expect(wrapper.find('.vote-buttons .downvote .points').text()).toMatch(
      propsData.downvotes.toString()
    );
  });

  it('increments upvote by 1 when upvote button is clicked', () => {
    const wrapper = shallowMount(VoteButtons, {
      propsData,
    });

    wrapper.find('.upvote').trigger('click');

    expect(wrapper.vm.$data.localUpvotes).toBe(propsData.upvotes + 1);
  });

  it('decrements downvote by 1 when downvote button is clicked', () => {
    const wrapper = shallowMount(VoteButtons, {
      propsData,
    });

    wrapper.find('.downvote').trigger('click');

    expect(wrapper.vm.$data.localDownvotes).toBe(propsData.downvotes - 1);
  });

  it('resets upvotes when downvote button is clicked', () => {
    const wrapper = shallowMount(VoteButtons, {
      propsData,
    });

    wrapper.find('.upvote').trigger('click');

    expect(wrapper.vm.$data.localUpvotes).toBe(propsData.upvotes + 1);

    wrapper.find('.downvote').trigger('click');

    expect(wrapper.vm.$data.localUpvotes).toBe(propsData.upvotes);
  });

  it('resets downvotes when upvote button is clicked', () => {
    const wrapper = shallowMount(VoteButtons, {
      propsData,
    });

    wrapper.find('.downvote').trigger('click');

    expect(wrapper.vm.$data.localDownvotes).toBe(propsData.downvotes - 1);

    wrapper.find('.upvote').trigger('click');

    expect(wrapper.vm.$data.localDownvotes).toBe(propsData.downvotes);
  });

  it('toggles upvote points with toggleUpvote() method', () => {
    const wrapper = shallowMount(VoteButtons, {
      propsData,
    });

    wrapper.vm.toggleUpvote();

    expect(wrapper.vm.$data.localUpvotes).toBe(propsData.upvotes + 1);

    wrapper.vm.toggleUpvote();

    expect(wrapper.vm.$data.localUpvotes).toBe(propsData.upvotes);
  });

  it('toggles downvote points with toggleDownvote() method', () => {
    const wrapper = shallowMount(VoteButtons, {
      propsData,
    });

    wrapper.vm.toggleDownvote();

    expect(wrapper.vm.$data.localDownvotes).toBe(propsData.downvotes - 1);

    wrapper.vm.toggleDownvote();

    expect(wrapper.vm.$data.localDownvotes).toBe(propsData.downvotes);
  });
});
