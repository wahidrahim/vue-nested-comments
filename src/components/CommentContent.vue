<template>
  <div class="comment-content">
    <div class="info">
      <div class="d-flex-row align-items-center">
        <span class="user-name font-bold">{{ comment.user_name }}</span>
        <!-- Re-usable Badge component, as there are usually multiple badge types -->
        <Badge v-if="comment.user_type" variant="dark">
          {{ comment.user_type }}
        </Badge>
        <span class="created-at font-light">
          · {{ comment.created_at | timeAgo }}
        </span>
      </div>

      <p class="body font-light">{{ comment.body }}</p>
    </div>
  </div>
</template>

<script>
import Badge from './Badge';

export default {
  components: {
    Badge,
  },
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-content {
  .user-name {
    margin-right: 0.64rem;
  }

  .created-at {
    margin-left: 0.64rem;
    color: gray;
    text-transform: uppercase;
    font-size: 1.12rem;
  }

  .body {
    line-height: 2.6rem;
    margin: 1rem 0 0.8rem;
  }
}
</style>
