import TabularData from '../components/tabular-data/TabularData';

const Page = () => {
  return (
    <section>
      <p className="pb-3">
        This page imports a component that both fetches and renders server side.
      </p>
      <TabularData />
    </section>
  );
};

export default Page;
