<template>
  <span class="badge" :class="[variantClass]">
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      required: false,
    },
  },
  computed: {
    variantClass() {
      return this.variant.toLowerCase();
    },
  },
};
</script>

<style lang="scss" scoped>
.badge {
  text-transform: uppercase;
  font-size: 0.4rem;
  font-weight: bold;
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;

  &.author {
    background: #333333;
    color: white;
  }
}
</style>
