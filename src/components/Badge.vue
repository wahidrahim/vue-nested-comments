<template>
  <span class="badge" :class="[variant]">
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      required: false,
      default: 'default',
    },
  },
};
</script>

<style lang="scss" scoped>
.badge {
  text-transform: uppercase;
  font-size: 0.64rem;
  font-weight: bold;
  padding: 0.32rem 0.96rem;
  border-radius: 1.6rem;

  &.default {
    background: #666666;
    color: lightgray;
  }

  &.dark {
    background: #333333;
    color: white;
  }
}
</style>
