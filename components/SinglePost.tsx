import React from 'react';
import Link from 'next/link';
import ArrowLeft from './icons/ArrowLeft';
import { getPost } from '../lib/api';
import AuthorAvatar from './AuthorAvatar';
import AuthorAttribution from './AuthorAttribution';
import { sanitize } from 'isomorphic-dompurify';

export async function SinglePost({ slug }: { slug: string }) {
  const post = await getPost(slug);
  
  return (
    <>
      {post && post.metadata.imgix_url && (
      <img
        width={800}
        height={450}
        className="mb-5 h-[450px] w-full max-w-3xl mx-auto bg-no-repeat object-cover object-center"
        src={`${post.metadata.imgix_url}?w=800&auto=format,compression`}
        alt={post.title}
      />
      )}
      <main className="mx-auto flex flex-col justify-center">
        <div className="mx-auto flex w-full flex-col items-start justify-center px-4 md:flex-row">
          <div className="mt-4 flex justify-start pb-4 md:justify-center md:pb-0 md:pr-20">
            <Link
              href="/"
              className="rounded-full border border-zinc-100 bg-white p-2 text-zinc-700 shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
          <div className="mr-20 flex w-full max-w-3xl flex-col justify-start md:w-3/4">
            <h2>
              {!post && <div className="text-center">Post Not found</div>}
              {post && <Link href={`/posts/${encodeURIComponent(post.id)}`}>{post.title}</Link>}
            </h2>
            {post && (
              <>
                <div className="flex flex-col justify-between space-y-4 pb-8 md:flex-row md:space-y-0">
                  <div className="flex items-center space-x-2 text-zinc-500 md:space-y-0 dark:text-zinc-400">
                    <AuthorAvatar post={post} />
                    <AuthorAttribution post={post} />
                  </div>
                </div>
                <hr className="w-full border-t border-zinc-300 pb-8 dark:border-zinc-700" />
                <div
                  className="post-body"
                  dangerouslySetInnerHTML={{
                    __html: sanitize(post.text) ?? '',
                  }}
                ></div>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
export const revalidate = 60;
