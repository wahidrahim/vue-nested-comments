<template>
  <span class="vote-buttons">
    <button @click="toggleUpvote">
      <span class="chevron-up d-inline-block"></span>
      <span class="points">{{ localUpvotes }}</span>
    </button>
    <button @click="toggleDownvote">
      <span class="chevron-down d-inline-block"></span>
      <span class="points">{{ localDownvotes }}</span>
    </button>
  </span>
</template>

<script>
export default {
  props: {
    upvotes: {
      type: Number,
      required: true,
    },
    downvotes: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      localUpvotes: this.upvotes,
      localDownvotes: this.downvotes,
    };
  },
  computed: {
    isVoted() {
      return (
        this.localUpvotes !== this.upvotes ||
        this.localDownvotes !== this.downvotes
      );
    },
  },
  methods: {
    /**
     * Normally you'd also make an api call to update the comment vote counts
     */
    toggleUpvote() {
      this.isVoted ? ++this.localUpvotes : --this.localUpvotes;
    },
    toggleDownvote() {
      this.isVoted ? ++this.localDownvotes : --this.localDownvotes;
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin chevron($direction) {
  $border: 1px solid lightgray;
  $size: 10px;

  position: relative;
  left: 3px;
  width: $size;
  height: $size;
  margin-right: 8px;
  transform: rotate(45deg);

  @if $direction == up {
    top: 5px;
    border-left: $border;
    border-top: $border;
  } @else if $direction == down {
    bottom: 1px;
    border-right: $border;
    border-bottom: $border;
  }
}

.vote-buttons {
  button {
    overflow: hidden;

    .points {
      margin-left: 0.25rem;
    }

    &:first-child {
      margin-right: 1rem;
    }
  }

  .chevron-up {
    @include chevron(up);
  }

  .chevron-down {
    @include chevron(down);
  }
}
</style>
