export async function load() {
  const postModules = import.meta.glob('./*/*.md', { eager: true });

  const posts = Object.entries(postModules).map(([path, mod]) => {
    const href = 'posts/' + path.split('/').slice(0, -1).join('/');
    const { metadata } = mod as { metadata: Record<string, unknown> };
    return { href, ...metadata };
  });

  return { posts };
}
