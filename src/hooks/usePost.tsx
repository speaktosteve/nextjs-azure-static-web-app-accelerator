import { Post } from '@/types/post';

export const usePost = async (): Promise<Post> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
