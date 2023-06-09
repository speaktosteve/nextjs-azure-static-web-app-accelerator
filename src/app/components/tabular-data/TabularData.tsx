import { usePosts } from '@/hooks/usePosts';
import { Post } from '@/types/post';
import { nanoid } from 'nanoid';

const TabularData = async () => {
  const posts = await usePosts();

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID </th>
          <th>Title </th>
        </tr>
      </thead>

      <tbody>
        {posts.map((post: Post) => {
          return (
            <tr key={nanoid()}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TabularData;
