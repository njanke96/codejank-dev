<script lang="ts">
  import { resolve } from '$app/paths';
</script>

<div class="site-logo">
  <a href={resolve('/')}>codejank</a>
  <sub class="logo-sub"></sub>
</div>

<style lang="scss">
  @use 'colors';
  @use 'spacing';

  .site-logo {
    a {
      font-size: 3.5rem;
      font-family: 'Courier', monospace, sans-serif;
      margin-top: 0;
      margin-bottom: 0;
      color: colors.$text-brighter;
      text-decoration: none;
    }

    .logo-sub {
      display: block;
    }

    user-select: none;
    margin-bottom: spacing.$md;
  }
</style>
