<script lang="ts">
  import '../app.scss';
  import favicon from '$lib/assets/favicon.ico';
  import Footer from '$lib/components/Footer.svelte';
  import Navigation from '$lib/components/Navigation.svelte';
  import SiteLogo from '$lib/components/SiteLogo.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>codejank</title>
</svelte:head>

<header>
  <div class="header-logo">
    <SiteLogo />
  </div>
  <Navigation />
</header>

<hr class="header-hr" />

<main>
  {@render children()}
</main>

<hr class="footer-hr" />

<Footer />

<style lang="scss">
  @use 'breakpoints';
  @use 'spacing';

  header {
    display: flex;
    flex-direction: row;
    align-items: center;

    @include breakpoints.xs {
      align-items: normal;
      flex-direction: column;
    }

    .header-logo {
      flex: 1;
    }
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
</style>
