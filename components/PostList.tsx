import PostCard from '../components/PostCard';
import { getAllPosts, getAuthor} from '../lib/api';

export async function PostList({ authorSlug }: { authorSlug?: string }) {
  let posts = await getAllPosts();
  let author;
  if (authorSlug) {
    author = await getAuthor(authorSlug);
  }
  return (
    <>
      {author && (
        <h1 className="my-4 text-4xl font-bold leading-tight tracking-tight text-zinc-700 dark:text-zinc-300">
          Posts by {author.title}
        </h1>
      )}
      {!posts && 'Cannot receive posts, check backend'}
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.id}>
              <PostCard post={post} />
            </div>
          );
        })}
    </>
  );
}
