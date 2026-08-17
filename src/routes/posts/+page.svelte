<script lang="ts">
  /* eslint svelte/no-navigation-without-resolve: "off" */

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

<ul>
  {#each posts as post (post.href)}
    <li><a href={post.href}>{post.title}</a></li>
  {/each}
</ul>
