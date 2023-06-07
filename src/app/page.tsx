import { getStars } from './components/shared/getStars';
import { Counter } from './components/shared/counter';

const Page = async () => {
  const stars = await getStars();

  return (
    <section className="text-center">
      <h1 className="text-lg">Next.JS Accelerator</h1>
      <p className="py-4">Sample fetch result: {stars.stargazers_count}</p>
      Client-side counter <Counter />
    </section>
  );
};

export default Page;
