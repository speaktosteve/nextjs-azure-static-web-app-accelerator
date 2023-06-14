const Page = async () => {
  const getBuildNumber = () => {
    return process.env.BUILD_VERSION !== undefined
      ? `Build version: ${process.env.BUILD_VERSION}`
      : 'This build number will be injected at release time if the BUILD_VERSION is set, see README.md for details';
  };

  return (
    <section className="text-center">
      <ul>
        <li>{getBuildNumber()}</li>
      </ul>
    </section>
  );
};

export default Page;
