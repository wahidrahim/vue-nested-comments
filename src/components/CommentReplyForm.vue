<template>
  <div class="comment-reply-form">
    <form @submit.prevent>
      <textarea></textarea>
      <button type="submit">Reply</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../scss/_mixins.scss';

.comment-reply-form {
  textarea {
    border: 1px solid lightgray;
  }

  button {
    @include buttonStyles;
  }
}
</style>
