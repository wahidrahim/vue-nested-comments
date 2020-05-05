<template>
  <div class="comment">
    <!-- Avatar's may have extra functionalities (click), and could be re-usable -->
    <Avatar :url="comment.avatar_url" />

    <div class="info">
      <div class="d-flex-row align-items-center">
        <span class="user-name">{{ comment.user_name }}</span>
        <!-- Re-usable Badge component, as there are usually multiple badge types -->
        <Badge v-if="comment.user_type" variant="dark">
          {{ comment.user_type }}
        </Badge>
        <span class="created-at">· 2 mins ago</span>
      </div>

      <p class="body">{{ comment.body }}</p>

      <CommentActions :replies="comment.comments" :votes="comment.votes" />
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar';
import Badge from './Badge';
import CommentActions from './CommentActions';

export default {
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
    font-weight: bold;
    margin-right: 0.64rem;
  }

  .created-at {
    margin-left: 0.64rem;
    color: gray;
    text-transform: uppercase;
    font-size: 1.12rem;
    font-weight: lighter;
  }

  .body {
    font-weight: lighter;
    line-height: 2.88rem;
  }

  &:hover .comment-actions ::v-deep button:not(.voted) {
    color: gray;
  }
}
</style>
