<template>
  <div class="comment">
    <div class="grid">
      <!-- Wrapper used for hover effect -->
      <div
        class="comment-wrapper-grid-item"
        @mouseenter="areActionsHighlighted = true"
        @mouseleave="areActionsHighlighted = false"
      >
        <!-- Avatar -->
        <div class="avatar-grid-item">
          <Avatar :url="comment.avatar_url" />
        </div>

        <!-- Comment body -->
        <div class="comment-grid-item">
          <CommentBody :comment="comment" />
        </div>

        <!-- Comment actions -->
        <div class="actions-grid-item">
          <ActionButtons
            :class="{ highlight: areActionsHighlighted }"
            :replies="comment.comments"
            :votes="comment.votes"
            @toggleReplyForm="isReplyFormVisible = !isReplyFormVisible"
            @toggleReplies="areRepliesVisible = !areRepliesVisible"
          />
        </div>
      </div>

      <!-- Reply form -->
      <div v-if="isReplyFormVisible" class="reply-form-grid-item">
        <ReplyForm />
      </div>

      <!-- Comment replies -->
      <div v-if="areRepliesVisible" class="replies-grid-item">
        <Comment
          v-for="(commentObj, idx) in comment.comments"
          :key="`reply-${idx}`"
          class="reply"
          :comment="commentObj"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar';
import CommentBody from '@/components/Comment/CommentBody';
import ActionButtons from '@/components/Comment/ActionButtons';
import ReplyForm from '@/components/Comment/ReplyForm';

export default {
  name: 'Comment',
  components: {
    Avatar,
    CommentBody,
    ActionButtons,
    ReplyForm,
  },
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    areActionsHighlighted: false,
    isReplyFormVisible: false,
    areRepliesVisible: false,
  }),
};
</script>

<style lang="scss" scoped>
$border: 1px solid lightgray;
$grid-columns: 9.6rem auto;
$grid-margin: 2.2rem;

.comment {
  border-top: $border;
  border-bottom: $border;

  .grid {
    display: grid;
    grid-template-columns: $grid-columns;
    grid-template-areas:
      'wrapper wrapper'
      '.       form   '
      '.       replies';

    .comment-wrapper-grid-item {
      grid-area: wrapper;
      display: grid;
      grid-template-columns: $grid-columns;
      grid-template-areas:
        'avatar comment'
        '.      actions';

      .avatar-grid-item {
        grid-area: avatar;
        margin: $grid-margin auto 0;
      }

      .comment-grid-item {
        grid-area: comment;
        margin: $grid-margin $grid-margin 0 0;
      }

      .actions-grid-item {
        grid-area: actions;
        margin: 0 $grid-margin ($grid-margin - 0.6rem) 0;
      }
    }

    .reply-form-grid-item {
      grid-area: form;
    }

    .replies-grid-item {
      grid-area: replies;

      .reply {
        border-bottom: none;
        padding-bottom: 0;
      }
    }
  }
}
</style>
