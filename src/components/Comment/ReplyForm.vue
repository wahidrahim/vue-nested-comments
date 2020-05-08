<template>
  <div class="comment-reply-form">
    <form @submit.prevent>
      <textarea></textarea>
      <button class="d-block dark" type="submit">Submit</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/scss/mixins';

.comment-reply-form {
  margin-bottom: 1.2rem;

  textarea {
    box-sizing: border-box;
    border: 1px solid lightgray;
    width: 100%;
  }

  button {
    @include buttonStyles;
    margin-left: auto;
  }
}
</style>
