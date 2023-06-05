import { getStars } from './components/common/getStars';
import { Counter } from './components/common/counter';

const Home = async () => {
  const stars = await getStars();

  return (
    <main className="flex min-h-screen justify-center items-center">
      <section className="text-center">
        <h1 className="text-lg">Next.JS Accelerator</h1>
        <p className="py-4">Sample fetch result: {stars.stargazers_count}</p>
        Client-side counter <Counter />
      </section>
    </main>
  );
};

export default Home;
