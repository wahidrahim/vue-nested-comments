<template>
  <div class="comment">
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

      <CommentActions :replies="comment.comments" :votes="comment.votes" />

      <Comment
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
};
</script>

<style lang="scss" scoped>
$border: 1px solid lightgray;

.comment {
  display: grid;
  grid-template-columns: 7.2rem auto;
  grid-template-rows: auto;
  padding: 2.4rem;
  border-top: $border;
  border-bottom: $border;

  .user-name {
    /* font-weight: 500; */
    margin-right: 0.64rem;
  }

  .created-at {
    margin-left: 0.64rem;
    color: gray;
    text-transform: uppercase;
    font-size: 1.12rem;
  }

  .body {
    /* font-weight: 300; */
    line-height: 2.88rem;
    margin: 1rem 0;
  }

  &:hover .comment-actions ::v-deep button:not(.voted) {
    color: gray;
  }
}
</style>
