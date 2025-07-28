import PostCard from '../components/PostCard';
import DownloadButton from '../components/DownloadButton';
import { getAllPosts} from '../lib/api';

export async function PostList({ authorSlug }: { authorSlug?: string }) {
  let posts = await getAllPosts();
  return (
    <>
      
      <DownloadButton />
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
