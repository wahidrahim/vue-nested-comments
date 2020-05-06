<template>
  <div class="comment-actions">
    <button @click="$emit('toggleReplyForm')">Reply</button>
    <button @click="$emit('toggleReplies')">
      <span class="replies-count">{{ replies.length }}</span> Replies
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
};
</script>

<style lang="scss" scoped>
@import '../scss/mixins';

.comment-actions {
  ::v-deep button {
    @include buttonStyles;

    .replies-count {
      color: gray;
    }

    &:not(:last-child) {
      margin-right: 1.6rem;
    }
  }

  &.highlight ::v-deep button {
    color: gray;
  }
}
</style>
