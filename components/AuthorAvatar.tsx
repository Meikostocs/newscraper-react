import Link from 'next/link';
import { Post } from '../lib/types';

export default function AuthorAvatar({ post }: { post: Post }): JSX.Element {
  return (
  <img
        className="h-8 w-8 rounded-full"
        src={`${post.metadata.author?.pfp}?w=100&auto=format,compression`}
        alt={post.title}
      />
  );
}
