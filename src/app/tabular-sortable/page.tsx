import TabularDataSortable from '../components/tabular-data/TabularDataSortable';

const Page = () => {
  return (
    <section>
      <p className="pb-3">
        This page imports a client side component that both fetches and renders
        the data client side allowing for client-side columnar sorting.
      </p>
      <TabularDataSortable />
    </section>
  );
};

export default Page;
