'use client';

import { usePosts } from '@/hooks/usePosts';
import { Post } from '@/types/post';
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';

export default function TabularDataSortable() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isSortAsc, setIsSortAsc] = useState<boolean>();

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const posts = await usePosts();
    setPosts(posts);
  };

  const onSortButtonClick = (): void => {
    setPosts((posts) => {
      const dataToSort = [...posts];
      dataToSort.sort((a, b) => {
        if (a['title'] < b['title']) {
          return isSortAsc ? 1 : -1;
        }
        if (a['title'] > b['title']) {
          return isSortAsc ? -1 : 1;
        }
        return 0;
      });
      return dataToSort;
    });
    setIsSortAsc(!isSortAsc);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID </th>
          <th>
            Title
            <button
              onClick={onSortButtonClick}
              className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            >
              sort
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post: Post) => {
          return (
            <tr key={uuid()}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
