<template>
  <span class="vote-buttons">
    <button class="upvote" :class="{ voted: isUpvoted }" @click="toggleUpvote">
      <span class="chevron d-inline-block"></span>
      <span class="points">{{ localUpvotes }}</span>
    </button>
    <button
      class="downvote"
      :class="{ voted: isDownvoted }"
      @click="toggleDownvote"
    >
      <span class="chevron d-inline-block"></span>
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
    isUpvoted() {
      return this.localUpvotes !== this.upvotes;
    },
    isDownvoted() {
      return this.localDownvotes !== this.downvotes;
    },
  },
  methods: {
    /**
     * Normally you'd also make an api call to update the comment vote counts
     */
    toggleUpvote() {
      if (this.isDownvoted) {
        this.localDownvotes = this.downvotes;
      }

      this.isUpvoted ? --this.localUpvotes : ++this.localUpvotes;
    },
    toggleDownvote() {
      if (this.isUpvoted) {
        this.localUpvotes = this.upvotes;
      }

      this.isDownvoted ? ++this.localDownvotes : --this.localDownvotes;
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
  $upvote-color: #ff4500;
  $downvote-color: #7193ff;

  button {
    overflow: hidden;

    &.upvote {
      .chevron {
        @include chevron(up);
      }

      &.voted {
        color: $upvote-color;

        .chevron {
          border-color: $upvote-color;
        }
      }
    }

    &.downvote {
      .chevron {
        @include chevron(down);
      }

      &.voted {
        color: $downvote-color;

        .chevron {
          border-color: $downvote-color;
        }
      }
    }

    .points {
      margin-left: 0.25rem;
    }

    &:first-child {
      margin-right: 1rem;
    }
  }
}
</style>
