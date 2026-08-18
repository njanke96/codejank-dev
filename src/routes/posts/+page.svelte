<script lang="ts">
  /* eslint svelte/no-navigation-without-resolve: "off" */

  import { formatDate, parseDate } from '$lib/time';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<h1>Posts</h1>

<ul>
  {#each data.posts as post (post.href)}
    <li>
      <a href={post.href}>{formatDate(parseDate(post.date))}: {post.title}</a>
    </li>
  {/each}
</ul>
