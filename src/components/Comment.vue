<template>
  <div class="comment">
    <Avatar :url="comment.avatarUrl" />
    <div class="user-name"></div>
  </div>
</template>

<script>
import Avatar from './Avatar';

export default {
  components: {
    Avatar,
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
}
</style>
