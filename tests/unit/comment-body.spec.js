import Vue from 'vue';
import { shallowMount, mount } from '@vue/test-utils';
import { timeAgo } from '@/utils/filters';
import CommentBody from '@/components/CommentBody';

// Needed to resolve error in mounting
Vue.filter('timeAgo', timeAgo);

const testComment = {
  user_name: 'test name',
  user_type: 'test type',
  created_at: 0,
  body: 'test comment body',
};

describe('CommentBody.vue', () => {
  it('renders user name', () => {
    const wrapper = shallowMount(CommentBody, {
      propsData: {
        comment: testComment,
      },
    });

    expect(wrapper.find('.user-name').text()).toMatch(testComment.user_name);
  });

  it('renders user type', () => {
    const wrapper = mount(CommentBody, {
      propsData: {
        comment: testComment,
      },
    });

    expect(wrapper.find('.badge').text()).toMatch(testComment.user_type);
  });

  it('renders how long ago it was created', () => {
    const wrapper = mount(CommentBody, {
      propsData: {
        comment: testComment,
      },
    });

    expect(wrapper.find('.created-at').text()).toMatch(
      timeAgo(testComment.created_at)
    );
  });

  it('renders comment', () => {
    const wrapper = shallowMount(CommentBody, {
      propsData: {
        comment: testComment,
      },
    });

    expect(wrapper.find('.body').text()).toMatch(testComment.body);
  });
});
