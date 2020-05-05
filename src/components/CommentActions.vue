<template>
  <div class="comment-actions">
    <button>Reply</button>
    <button @click="$emit('toggleReplies')">
      <span class="dark">{{ numberOfReplies }}</span> Replies
    </button>
    <VoteButtons :upvotes="votes.up" :downvotes="votes.down" />
  </div>
</template>

<script>
import VoteButtons from './VoteButtons';

export default {
  components: {
    VoteButtons,
  },
  props: {
    replies: {
      type: Array,
      required: true,
    },
    votes: {
      type: Object,
      required: true,
    },
  },
  computed: {
    numberOfReplies() {
      return this.replies.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-actions {
  ::v-deep button {
    font-weight: 300;
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
      margin-right: 1.6rem;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  &.highlight ::v-deep button {
    color: gray;
  }
}
</style>
