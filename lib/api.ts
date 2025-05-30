import { createBucketClient } from '@cosmicjs/sdk';
import { Post, GlobalData, Author } from './types';

const cosmic = createBucketClient({
  // @ts-ignore
  bucketSlug: process.env.COSMIC_BUCKET_SLUG ?? '',
  // @ts-ignore
  readKey: process.env.COSMIC_READ_KEY ?? '',
});
export default cosmic;

export async function getAllPosts(): Promise<Post[]> {
  try {
    const res = await fetch('http://localhost:8000/api/posts');
    return res.json();
  } catch (error) {
    console.log('Errore caricamento post:', error);
    return [];
  }
}

export async function getPost(url: string): Promise<Article> {
  try {
    const res = await fetch('http://localhost:8000/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log('Errore caricamento post:', error);
    return {} as Article;  
  }
}


export async function getRelatedPosts(slug: string): Promise<Post[]> {
  try {
    // Get suggested posts
    const data: any = await Promise.resolve(
      cosmic.objects
        .find({
          type: 'posts',
          slug: {
            $ne: slug,
          },
        })
        .props(['id', 'type', 'slug', 'title', 'metadata', 'created_at'])
        .sort('random')
        .depth(1)
    );
    const suggestedPosts: Post[] = await data.objects;
    return Promise.resolve(suggestedPosts);
  } catch (error) {
    console.log('Oof', error);
  }
  return Promise.resolve([]);
}

export async function getAuthor(slug: string): Promise<Author> {
  try {
    const data: any = await Promise.resolve(
      cosmic.objects
        .findOne({
          type: 'authors',
          slug,
        })
        .props('id,title')
        .depth(1)
    );
    const author = await data.object;
    return Promise.resolve(author);
  } catch (error) {
    console.log('Oof', error);
  }
  return Promise.resolve({} as Author);
}

export async function getAuthorPosts(id: string): Promise<Post[]> {
  try {
    // Get Author's posts
    const data: any = await Promise.resolve(
      cosmic.objects
        .find({
          type: 'posts',
          'metadata.author': id,
        })
        .props(['id', 'type', 'slug', 'title', 'metadata', 'created_at'])
        .sort('random')
        .depth(1)
    );
    const authorPosts: Post[] = await data.objects;
    return Promise.resolve(authorPosts);
  } catch (error) {
    console.log('Oof', error);
  }
  return Promise.resolve([]);
}
