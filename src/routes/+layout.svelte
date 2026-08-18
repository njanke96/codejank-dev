<script lang="ts">
  import '../app.scss';
  import favicon from '$lib/assets/favicon.svg';
  import SiteLogo from '$lib/components/SiteLogo.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>codejank</title>
</svelte:head>

<SiteLogo />

<hr class="header-hr" />

<main>
  {@render children()}
</main>

<hr class="footer-hr" />

<Footer />

<style lang="scss">
  @use 'spacing';

  .header-hr,
  .footer-hr {
    width: 100%;
    margin-bottom: spacing.$md;
  }

  .footer-hr {
    margin-top: spacing.$md;
    margin-bottom: spacing.$md;
  }
</style>
