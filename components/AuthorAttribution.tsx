import { Post } from '../lib/types';
import helpers from '../helpers';

export default function AuthorAttribution({
  post,
}: {
  post: Post;
}): JSX.Element {
  return (
    <div className="flex space-x-1">
      <span>by {post.metadata?.author?.title} on {helpers.stringToFriendlyDate(post?.metadata?.published_date)}
      </span>
    </div>
  );
}
