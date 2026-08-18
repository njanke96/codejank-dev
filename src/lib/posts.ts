export interface PostData {
  /** Post title */
  title: string;

  /** Post ISO date */
  date: string;

  /** Post short summary, shown as a subtitle */
  summary?: string;

  /** Short post summary */

  // Not defined in front matter:
  //

  /** Absolute path to the post at run-time */
  href: string;
}
