<template>
  <div class="comment">
    <div
      class="wrapper"
      @mouseenter="isActionsHighlighted = true"
      @mouseleave="isActionsHighlighted = false"
    >
      <!-- Avatar's may have extra functionalities (click), and could be re-usable -->
      <Avatar :url="comment.avatar_url" />

      <div class="info">
        <div class="d-flex-row align-items-center">
          <span class="user-name font-bold">{{ comment.user_name }}</span>
          <!-- Re-usable Badge component, as there are usually multiple badge types -->
          <Badge v-if="comment.user_type" variant="dark">
            {{ comment.user_type }}
          </Badge>
          <span class="created-at font-light">
            · {{ comment.created_at | timeAgo }}
          </span>
        </div>

        <p class="body font-light">{{ comment.body }}</p>

        <CommentActions
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
</template>

<script>
import Avatar from './Avatar';
import Badge from './Badge';
import CommentActions from './CommentActions';

export default {
  name: 'Comment',
  components: {
    Avatar,
    Badge,
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

  .wrapper {
    display: grid;
    grid-template-columns: 7.2rem auto;
    grid-template-rows: auto;
    padding: 2.4rem;

    .user-name {
      margin-right: 0.64rem;
    }

    .created-at {
      margin-left: 0.64rem;
      color: gray;
      text-transform: uppercase;
      font-size: 1.12rem;
    }

    .body {
      line-height: 2.88rem;
      margin: 1rem 0;
    }
  }

  .replies {
    margin-left: 9.2rem;

    .reply {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
}
</style>
