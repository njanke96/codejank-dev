<script lang="ts">
  /* eslint svelte/no-navigation-without-resolve: "off" */

  import { formatDate, parseDate } from '$lib/time';

  interface PostData {
    /** Post title (define in front matter) */
    title: string;

    /** Post ISO date (define in front matter) */
    date: string;

    /** Absolute path to the post at run-time */
    href: string;
  }

  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  let posts = $derived.by(() => {
    return data.posts as unknown as PostData[];
  });
</script>

<h1>Posts</h1>

<ul>
  {#each posts as post (post.href)}
    <li>
      <a href={post.href}>{formatDate(parseDate(post.date))}: {post.title}</a>
    </li>
  {/each}
</ul>
