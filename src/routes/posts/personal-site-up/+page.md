---
title: 'Personal Website and Email'
date: '2026-08-17T00:00:00Z'
summary: "This is something I've been putting off for a long time."
layout: posts
---

I'm happy to have a place to dump my thoughts and write about personal projects.
I'm not much of a writer. Part of my reason for setting this up is to practice writing about things
I enjoy writing about. This is a post I'm writing mostly so the posts page is not empty.

## Website

### Tech

The website is built with [SvelteKit](https://svelte.dev/) and [mdsvex](https://mdsvex.pngwn.io/).
I write posts in Markdown and links to each post are automatically generated on the [posts](/posts) page.
The site is fully [statically generated](https://svelte.dev/docs/kit/adapter-static) at build-time.
I like being able to host it anywhere as easily as possible, and I don't want to deal with
SSR/Hydration or any of that nonsense. I deal with that stuff enough at work!

Here is the block of code that runs to populate the [posts](/posts) page, because I want to see how code blocks look:

```typescript
export async function load() {
  const postModules = import.meta.glob('./*/*.md', { eager: true });

  const posts = Object.entries(postModules).map(([path, mod]) => {
    const href = 'posts/' + path.split('/').slice(0, -1).join('/');
    const { metadata } = mod as { metadata: Omit<PostData, 'href'> };
    return { href, ...metadata };
  });

  return { posts };
}
```

Looks good. I really like [gruvbox](https://github.com/morhetz/gruvbox).

The website source is available [here](https://codeberg.org/njanke96/codejank-dev).

### Style

I don't like designing fancy websites. I'm not good at it.
I like websites that look fine and that display the content instantly without flashy animations.
I think this website's design is a reflection of that.

## Email

I like the idea of having an email that's exclusively for talking to other humans. It's nice
to start fresh.
