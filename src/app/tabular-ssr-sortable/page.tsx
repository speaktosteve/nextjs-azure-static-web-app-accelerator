import TabularDataSortable from '../components/tabular/tabular-data-sortable';

const Page = () => {
  return (
    <section>
      <p className="pb-3">
        This page imports a client side component that both fetches and renders
        the data client side.
      </p>
      <TabularDataSortable />
    </section>
  );
};

export default Page;
