<script lang="ts">
  import '../app.scss';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>codejank</title>
</svelte:head>

<div class="outer">
  <main>
    {@render children()}
  </main>
</div>
