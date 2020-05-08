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
@import './scss/styles.scss';

#app {
  padding: 3.2rem 25%;

  @media (max-width: 768px) {
    padding: 3.2rem;
  }

  @media (max-width: 425px) {
    padding: 0;
  }
}
</style>
