<template>
  <div id="app">
    <Comment
      v-for="(comment, i) in comments"
      :key="`comment-${i}`"
      :comment="comment"
    />
  </div>
</template>

<script>
import Comment from './components/Comment';

import comments from './comments.data.json';

export default {
  name: 'App',
  components: {
    Comment,
  },
  computed: {
    comments: () => comments,
  },
};
</script>

<style lang="scss">
#app {
  font-family: sans-serif;
}
</style>
