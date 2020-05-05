<template>
  <div class="avatar" :style="backgroundImage"></div>
</template>

<script>
export default {
  props: {
    url: {
      required: true,
      type: String,
    },
  },
  computed: {
    backgroundImage() {
      return {
        backgroundImage: `url(${this.url})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-size: cover;
}
</style>
