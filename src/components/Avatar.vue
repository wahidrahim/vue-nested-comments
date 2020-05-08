<template>
  <div class="avatar" :style="backgroundImage"></div>
</template>

<script>
export default {
  name: 'Avatar',
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
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background-size: cover;
}
</style>
