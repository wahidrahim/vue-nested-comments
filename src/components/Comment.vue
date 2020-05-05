<template>
  <div class="comment">
    <Avatar :url="avatarUrl" />
    <div class="user-name"></div>
  </div>
</template>

<script>
import Avatar from './Avatar';

import commentData from '../comment-data.json';

export default {
  components: {
    Avatar,
  },
  computed: {
    avatarUrl: () => commentData.avatar_url,
  },
  created() {
    console.log(commentData);
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
