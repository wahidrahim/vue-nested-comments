<template>
  <span class="vote-buttons">
    <button>
      <span class="chevron-up d-inline-block"></span>
      <span class="points">123</span>
    </button>
    <button>
      <span class="chevron-down d-inline-block"></span>
      <span class="points">0</span>
    </button>
  </span>
</template>

<script>
export default {};
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
