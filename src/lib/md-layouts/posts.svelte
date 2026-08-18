<script lang="ts">
  import type { Snippet } from 'svelte';

  import { resolve } from '$app/paths';
  import { formatDate, parseDate } from '$lib/time';
  import type { PostData } from '$lib/posts';

  type Props = {
    children: Snippet;
  } & PostData;

  let { title, date, summary, children }: Props = $props();
</script>

<svelte:head>
  <title>{title} - codejank</title>
</svelte:head>

<a href={resolve('/posts')}>&#8592; Back to posts</a>

<div class="post-title-container">
  <div class="post-title-and-summary">
    <h1 class="post-title">{title}</h1>
    <h5 class="post-summary">{summary}</h5>
  </div>
  <div>
    <h5 class="post-date">{formatDate(parseDate(date))}</h5>
  </div>
</div>

{#if children}
  {@render children()}
{/if}

<style lang="scss">
  @use 'breakpoints';
  @use 'spacing';

  .post-title-container {
    display: flex;
    align-items: start;
    margin-top: spacing.$md;

    @include breakpoints.xs {
      flex-direction: column-reverse;
    }

    .post-title-and-summary {
      flex: 1;
    }

    .post-title {
      margin-top: 0;
      margin-bottom: spacing.$sm;
    }

    .post-summary {
      margin-top: 0;
      margin-bottom: spacing.$xs;
    }

    .post-date {
      margin-top: 0;
      margin-bottom: spacing.$xs;
    }
  }
</style>
