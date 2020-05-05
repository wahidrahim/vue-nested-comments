<template>
  <div class="comment">
    <Avatar :url="comment.avatarUrl" />
    <div class="details">
      <span class="user-name">{{ comment.userName }}</span>
      <Badge v-if="comment.userType" variant="dark">
        {{ comment.userType }}
      </Badge>
      <span class="created-at">· 2 mins ago</span>
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

  .details {
    display: flex;
    align-items: flex-start;

    .user-name {
      font-weight: bold;
      margin-right: 0.4rem;
    }

    .created-at {
      margin-left: 0.4rem;
      color: gray;
      text-transform: uppercase;
      font-size: 0.7rem;
      font-weight: lighter;
    }
  }
}
</style>
