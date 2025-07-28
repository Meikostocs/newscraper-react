import { Post, Article } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';



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

export async function downloadNewsPaper(): Promise<Blob> {
  const response = await fetch(`${BASE_URL}/api/newspaper`, {
    method: 'GET',
    headers: {
      Accept: 'application/pdf',
    },
  })

  if (!response.ok) {
    throw new Error('Errore nel download del PDF')
  }

  const blob = await response.blob()
  return blob
}
