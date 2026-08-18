<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    title?: string;
  }

  let { title, children }: Props = $props();
  let metaTitle = $derived(title ? `${title} - codejank` : 'codejank');
</script>

<svelte:head>
  <title>{metaTitle}</title>
</svelte:head>

{#if children}
  {@render children()}
{/if}
