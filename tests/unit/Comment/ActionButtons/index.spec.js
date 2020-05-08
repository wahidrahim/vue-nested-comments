import { shallowMount } from '@vue/test-utils';

import ActionButtons from '@/components/Comment/ActionButtons';

describe('ActionButtons.vue', () => {
  it('emits "toggleReplyForm" event', async () => {
    const wrapper = shallowMount(ActionButtons, {
      propsData: {
        replies: [],
        votes: {
          up: 123,
          down: 0,
        },
      },
    });

    wrapper.vm.$emit('toggleReplyForm');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().toggleReplyForm).toBeTruthy();
  });

  it('emits "toggleReplies" event', async () => {
    const wrapper = shallowMount(ActionButtons, {
      propsData: {
        replies: [],
        votes: {
          up: 123,
          down: 0,
        },
      },
    });

    wrapper.vm.$emit('toggleReplies');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().toggleReplies).toBeTruthy();
  });
});
