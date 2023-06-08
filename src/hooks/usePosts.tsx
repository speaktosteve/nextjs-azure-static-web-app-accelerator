export const usePosts = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?userId=1'
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
