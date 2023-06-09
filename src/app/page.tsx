import { usePost } from '@/hooks/usePost';
import { Counter } from './components/shared/counter';
import { Post } from '@/types/post';

const Page = async () => {
  const post: Post = await usePost();

  return (
    <section className="text-center">
      <h1 className="text-lg">Next.JS Accelerator</h1>
      <p className="py-4">Sample server-side fetch result: {post.title}</p>
      Client-side counter <Counter />
    </section>
  );
};

export default Page;
