'use client';

import { usePosts } from '@/hooks/usePosts';
import { Post } from '@/types/post';
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { Spinner } from '../shared/spinner';

export default function TabularDataSortable() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isSortAsc, setIsSortAsc] = useState<boolean>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const posts = await usePosts();
    setPosts(posts);
    setIsLoading(false);
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
        {isLoading ? (
          <tr key={uuid()}>
            <th colSpan={2}>
              <span className="flex gap-3">
                Loading data <Spinner />
              </span>
            </th>
          </tr>
        ) : (
          <tr>
            <th>ID </th>
            <th>
              Title
              <button
                onClick={onSortButtonClick}
                className="mx-3 p-0 underline"
              >
                sort
              </button>
            </th>
          </tr>
        )}
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
