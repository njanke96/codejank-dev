<script lang="ts">
  import codeberg from '$lib/assets/codeberg.svg';
  import githubWhite from '$lib/assets/github-white.svg';
</script>

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
  @use 'spacing';

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
