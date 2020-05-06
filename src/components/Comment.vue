<template>
  <div class="comment">
    <div class="grid">
      <div
        class="comment-wrapper-grid-item"
        @mouseenter="isActionsHighlighted = true"
        @mouseleave="isActionsHighlighted = false"
      >
        <div class="avatar-grid-item">
          <!-- Avatar's may have extra functionalities (click), and could be re-usable -->
          <Avatar :url="comment.avatar_url" />
        </div>
        <div class="content-grid-item">
          <CommentContent :comment="comment" />
        </div>
        <div class="actions-grid-item">
          <CommentActions
            class="comment-actions-component"
            :class="{ highlight: isActionsHighlighted }"
            :replies="comment.comments"
            :votes="comment.votes"
            @toggleReplies="isRepliesVisible = !isRepliesVisible"
          />
        </div>
      </div>

      <div class="replies" v-if="isRepliesVisible">
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
import CommentContent from './CommentContent';
import CommentActions from './CommentActions';

export default {
  name: 'Comment',
  components: {
    Avatar,
    CommentContent,
    CommentActions,
  },
  props: {
    comment: {
      required: true,
    },
  },
  data: () => ({
    isRepliesVisible: false,
    isActionsHighlighted: false,
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
      '.      replies';

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

      .content-grid-item {
        grid-area: comment;
        margin: $grid-margin $grid-margin 0 0;
      }

      .actions-grid-item {
        grid-area: actions;
        margin: 0 $grid-margin $grid-margin 0;
      }
    }

    .replies {
      grid-area: replies;

      .reply {
        border-bottom: none;
        padding-bottom: 0;
      }
    }
  }
}
</style>
