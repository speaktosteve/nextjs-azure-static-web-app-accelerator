const Page = async () => {
  return (
    <section className="text-center">
      <ul>
        <li>Build version: {process.env.BUILD_VERSION}</li>
      </ul>
    </section>
  );
};

export default Page;
