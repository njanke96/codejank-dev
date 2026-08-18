<script lang="ts">
  import { resolve } from '$app/paths';
</script>

<div class="navigation-wrapper">
  <a href={resolve('/')}>Home</a>
  <a href={resolve('/posts')}>Posts</a>
  <a href={resolve('/contact')}>Contact</a>
</div>

<style lang="scss">
  @use 'breakpoints';
  @use 'colors';
  @use 'spacing';

  .navigation-wrapper {
    display: flex;
    flex-direction: row;
    gap: spacing.$lg;

    @include breakpoints.xs {
      margin-top: spacing.$md;
      margin-bottom: spacing.$md;
    }

    a {
      color: colors.$text-brighter;
      text-decoration: none;
    }
  }
</style>
