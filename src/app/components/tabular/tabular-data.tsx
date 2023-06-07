import { Post } from '@/types/post';
import uuid from 'react-uuid';

const getData = async (): Promise<Post[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const TabularData = async () => {
  const data = await getData();

  return (
    <table>
      <thead>
        <tr>
          <th className="border">ID</th>
          <th className="border">Title</th>
        </tr>
      </thead>
      <tbody>
        {data.map((post: Post) => {
          return (
            <tr key={uuid()}>
              <td className="border">{post.id}</td>
              <td className="border">{post.title}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
