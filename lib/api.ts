import { createBucketClient } from '@cosmicjs/sdk';
import { Post, GlobalData, Author, Article } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || '',
  readKey: process.env.COSMIC_READ_KEY || '',
});
export default cosmic;

export async function getAllPosts(): Promise<Post[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/posts`);
    return await res.json();
  } catch (error) {
    console.error('Errore caricamento post:', error);
    return [];
  }
}

export async function getPost(url: string): Promise<Article> {
  try {
    const res = await fetch(`${BASE_URL}/api/posts`, {
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
    console.error('Errore caricamento post:', error);
    return {} as Article;
  }
}
