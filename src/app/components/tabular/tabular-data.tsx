import { usePosts } from '@/hooks/usePosts';
import { Post } from '@/types/post';
import uuid from 'react-uuid';

const TabularData = async () => {
  const posts = await usePosts();

  return (
    <table>
      <thead>
        <tr>
          <th className="border">ID</th>
          <th className="border">Title</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post: Post) => {
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

export default TabularData;
