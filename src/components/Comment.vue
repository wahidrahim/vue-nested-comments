<template>
  <div class="comment">
    <div class="grid">
      <div
        class="comment-wrapper-grid-item"
        @mouseenter="areActionsHighlighted = true"
        @mouseleave="areActionsHighlighted = false"
      >
        <div class="avatar-grid-item">
          <!-- Avatar's may have extra functionalities (click), and could be re-usable -->
          <Avatar :url="comment.avatar_url" />
        </div>
        <div class="comment-grid-item">
          <CommentBody :comment="comment" />
        </div>
        <div class="actions-grid-item">
          <CommentActions
            class="comment-actions-component"
            :class="{ highlight: areActionsHighlighted }"
            :replies="comment.comments"
            :votes="comment.votes"
            @toggleReplyForm="isReplyFormVisible = !isReplyFormVisible"
            @toggleReplies="areRepliesVisible = !areRepliesVisible"
          />
        </div>
      </div>

      <!-- Reply form -->
      <div class="reply-form-grid-item" v-if="isReplyFormVisible">
        <CommentReplyForm />
      </div>

      <!-- Comment replies -->
      <div class="replies-grid-item" v-if="areRepliesVisible">
        <Comment
          class="reply"
          v-for="(comment, i) in comment.comments"
          :key="`reply-${i}`"
          :comment="comment"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar';
import CommentBody from './CommentBody';
import CommentActions from './CommentActions';
import CommentReplyForm from './CommentReplyForm';

export default {
  name: 'Comment',
  components: {
    Avatar,
    CommentBody,
    CommentActions,
    CommentReplyForm,
  },
  props: {
    comment: {
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
        margin: 0 $grid-margin $grid-margin 0;
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
