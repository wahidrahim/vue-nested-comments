import Vue from 'vue';
import { shallowMount, mount } from '@vue/test-utils';
import Comment from '@/components/Comment';
import { timeAgo } from '@/utils/filters';

Vue.filter('timeAgo', timeAgo);

const testComment = {
  user_name: 'user name',
  user_type: 'user type',
  avatar_url: '/some/url',
  body: '',
  votes: {
    up: 0,
    down: 0,
  },
  comments: [],
  created_at: 0,
};

const chidlrenIndices = {
  Avatar: 0,
  CommentBody: 1,
  CommentActions: 2,
  ReplyForm: 3,
};

describe('Comment.vue', () => {
  it('sets `areActionsHighlighted` to `true` on mouseEnter', () => {
    const wrapper = shallowMount(Comment, {
      propsData: {
        comment: testComment,
      },
    });

    wrapper.find('.comment-wrapper-grid-item').trigger('mouseenter');

    expect(wrapper.vm.$data.areActionsHighlighted).toBe(true);
  });

  it('sets `areActionsHighlighted` to `false` on mouseleave', () => {
    const wrapper = shallowMount(Comment, {
      propsData: {
        comment: testComment,
      },
    });

    wrapper.find('.comment-wrapper-grid-item').trigger('mouseleave');
    expect(wrapper.vm.$data.areActionsHighlighted).toBe(false);
  });

  it('toggles `isReplyFormVisible` to `true`/`false` on toggleReplyForm', () => {
    const wrapper = mount(Comment, {
      propsData: {
        comment: testComment,
      },
    });

    const emitToggleReplyForm = () => {
      // Emit from child component
      wrapper.vm.$children[chidlrenIndices.CommentActions].$emit(
        'toggleReplyForm'
      );
    };

    emitToggleReplyForm();
    expect(wrapper.vm.$data.isReplyFormVisible).toBe(true);

    emitToggleReplyForm();
    expect(wrapper.vm.$data.isReplyFormVisible).toBe(false);
  });

  it('toggles `areRepliesVisible` to `true`/`false` on toggleReplies', () => {
    const wrapper = mount(Comment, {
      propsData: {
        comment: testComment,
      },
    });

    const emitToggleReplies = () => {
      // Emit from child component
      wrapper.vm.$children[chidlrenIndices.CommentActions].$emit(
        'toggleReplies'
      );
    };

    emitToggleReplies();
    expect(wrapper.vm.$data.areRepliesVisible).toBe(true);

    emitToggleReplies();
    expect(wrapper.vm.$data.areRepliesVisible).toBe(false);
  });
});
