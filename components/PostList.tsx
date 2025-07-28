import PostCard from '../components/PostCard';
import { getAllPosts} from '../lib/api';

export async function PostList({ authorSlug }: { authorSlug?: string }) {
  let posts = await getAllPosts();
  return (
    <>
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
