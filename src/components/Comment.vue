<template>
  <div class="comment">
    <Avatar :url="comment.avatar_url" />
    <div class="info">
      <div class="d-flex-row align-items-center">
        <span class="user-name">{{ comment.user_name }}</span>
        <Badge v-if="comment.user_type" variant="dark">
          {{ comment.user_type }}
        </Badge>
        <span class="created-at">· 2 mins ago</span>
      </div>
      <p class="body">{{ comment.body }}</p>
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar';
import Badge from './Badge';

export default {
  components: {
    Avatar,
    Badge,
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
  grid-template-columns: 4.5rem auto;
  grid-template-rows: auto;
  padding: 1.5rem;
  border-top: $border;
  border-bottom: $border;

  .user-name {
    font-weight: bold;
    margin-right: 0.4rem;
  }

  .body {
    font-weight: lighter;
    line-height: 1.8rem;
  }

  .created-at {
    margin-left: 0.4rem;
    color: gray;
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: lighter;
  }
}
</style>
