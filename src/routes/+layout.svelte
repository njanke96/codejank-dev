<script lang="ts">
  import { resolve } from '$app/paths';

  import '../app.scss';
  import favicon from '$lib/assets/favicon.svg';

  import codeberg from '$lib/assets/codeberg.svg';
  import githubWhite from '$lib/assets/github-white.svg';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>codejank</title>
</svelte:head>

<div class="site-logo">
  <a href={resolve('/')}>codejank</a>
</div>

<hr class="header-hr" />

<main>
  {@render children()}
</main>

<hr class="footer-hr" />

<footer class="footer">
  <div class="footer-row">
    <div>© 2026 Nathan Janke &lt;<a href="mailto:nate@codejank.dev">nate@codejank.dev</a>&gt;</div>
  </div>
  <div class="footer-row">
    <a href="https://github.com/njanke96"><img src={githubWhite} alt="github" /></a>
    <a href="https://codeberg.org/njanke96"><img src={codeberg} alt="codeberg" /></a>
  </div>
</footer>

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

    user-select: none;
    margin-bottom: spacing.$md;
  }

  .header-hr,
  .footer-hr {
    width: 100%;
    margin-bottom: spacing.$md;
  }

  .footer-hr {
    margin-top: spacing.$md;
    margin-bottom: spacing.$md;
  }

  .footer {
    font-size: 0.8em;

    .footer-row {
      line-height: 1.2em;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: spacing.$sm;
    }

    div {
      margin-bottom: spacing.$xs;
    }

    img {
      height: 1.2em;
      width: 1.2em;
    }
  }
</style>
