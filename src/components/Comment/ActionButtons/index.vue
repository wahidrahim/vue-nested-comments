<template>
  <div class="comment-actions">
    <!-- REPLY button -->
    <button @click="$emit('toggleReplyForm')">Reply</button>

    <!-- {n} REPLIES button -->
    <button @click="$emit('toggleReplies')">
      <span class="replies-count">{{ replies.length }}</span> Replies
    </button>

    <!-- Upvote/Downvote buttons -->
    <VoteButtons :upvotes="votes.up" :downvotes="votes.down" />
  </div>
</template>

<script>
import VoteButtons from '@/components/Comment/ActionButtons/VoteButtons';

export default {
  name: 'ActionButtons',
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
@import '~@/scss/mixins';

.comment-actions {
  /deep/ button {
    @include buttonStyles;

    .replies-count {
      color: gray;
    }

    &:not(:last-child) {
      margin-right: 1.6rem;
    }
  }

  &.highlight /deep/ button {
    color: gray;
  }
}
</style>
