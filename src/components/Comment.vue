<template>
  <div class="comment">
    <Avatar :url="avatarUrl" />
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

<style></style>
