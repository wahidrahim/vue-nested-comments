<template>
  <div class="comment">
    <!-- Avatar's may have extra functionalities (click), and could be re-usable -->
    <Avatar :url="comment.avatar_url" />

    <div class="info">
      <div class="d-flex-row align-items-center">
        <span class="user-name">{{ comment.user_name }}</span>
        <!-- There are usually multiple badge types -->
        <Badge v-if="comment.user_type" variant="dark">
          {{ comment.user_type }}
        </Badge>
        <span class="created-at">· 2 mins ago</span>
      </div>

      <p class="body">{{ comment.body }}</p>

      <div class="actions">
        <button>Reply</button>
        <button><span class="dark">21</span> Replies</button>
        <button>upvote button</button>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar';
import Badge from './Badge';

export default {
  components: {
    Avatar,
    Badge,
  },
  props: {
    comment: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$border: 1px solid lightgray;

.comment {
  display: grid;
  grid-template-columns: 4.5rem auto;
  grid-template-rows: auto;
  padding: 1.5rem;
  border-top: $border;
  border-bottom: $border;

  .user-name {
    font-weight: bold;
    margin-right: 0.4rem;
  }

  .created-at {
    margin-left: 0.4rem;
    color: gray;
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: lighter;
  }

  .body {
    font-weight: lighter;
    line-height: 1.8rem;
  }

  .actions {
    > * {
      color: lightgray;

      &:not(:last-child) {
        margin-right: 1rem;
      }
    }

    button {
      text-transform: uppercase;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;

      .dark {
        color: gray;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &:hover {
    .actions > * {
      color: gray;
    }
  }
}
</style>
