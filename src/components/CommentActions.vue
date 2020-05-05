<template>
  <div class="comment-actions">
    <button>Reply</button>
    <button><span class="dark"></span> Replies</button>
    <VoteButtons :upvotes="comment.upvotes" :downvotes="comment.downvotes" />
  </div>
</template>

<script>
import VoteButtons from './VoteButtons';

export default {
  components: {
    VoteButtons,
  },
  props: {
    // Necessary prop drilling
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-actions ::v-deep button {
  color: lightgray;
  text-transform: uppercase;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  .dark {
    color: gray;
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    text-decoration: underline;
  }
}
</style>
