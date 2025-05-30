import { SinglePost } from '../../../components/SinglePost';
import { getPost } from '../../../lib/api';
import { Suspense } from 'react';
import { Loader } from '../../../components/Loader';

export async function generateMetadata(props: { params: { slug: string } }) {
  const params = await props.params;
  const post = await getPost(decodeURIComponent(params.slug));
  console.log(params)
  return { title: `${post.title} | Cannot get title` };
}

export default async function Page(props: { params: { slug: string } }) {
  const params = await props.params;
  console.log(params)

  return (
    <Suspense fallback={<Loader />}>
      <SinglePost slug={decodeURIComponent(params.slug)} />
    </Suspense>
  );
}
export const revalidate = 60;
