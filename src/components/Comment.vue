<template>
  <div class="comment">
    <div class="grid">
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

.comment {
  border-top: $border;
  border-bottom: $border;

  .grid {
    display: grid;
    grid-template-columns: 9.6rem auto;

    .avatar-grid-item {
      display: inline-block;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      margin: 2.4rem auto 0;
    }

    .content-grid-item {
      grid-column-start: 2;
      grid-row-start: 1;
      margin-top: 2.4rem;
      margin-right: 2.4rem;
    }

    .actions-grid-item {
      grid-column-start: 2;
      margin-right: 2.4rem;
      margin-bottom: 2.4rem;
    }

    .replies {
      grid-column-start: 2;

      .reply {
        border-bottom: none;
        padding-bottom: 0;
      }
    }
  }
}
</style>
