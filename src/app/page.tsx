import 'server-only';
import { getStars } from './components/common/getStars';

const Home = async () => {
  const stars = await getStars();

  return (
    <main className="flex min-h-screen justify-center items-center">
      <section className="text-center">
        <h1 className="text-lg">Next.JS Accelerator</h1>
        <p className="pt-4">Sample fetch result: {stars.stargazers_count}</p>
      </section>
    </main>
  );
};

export default Home;
