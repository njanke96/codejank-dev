/** Abstractions of common date/time opterations, in case more fine grained behavior is needed later. */

export function parseDate(iso: string): Date {
  return new Date(iso);
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString();
}
