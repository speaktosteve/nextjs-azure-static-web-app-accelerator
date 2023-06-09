const Page = async () => {
  return (
    <section className="text-center">
      <ul>
        <li>Release version: {process.env.RELEASE_VERSION}</li>
      </ul>
    </section>
  );
};

export default Page;
