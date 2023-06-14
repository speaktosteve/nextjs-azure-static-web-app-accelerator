import LoaderSpinner from './../../../images/spinner.png';
import Image from 'next/image';

export const Spinner = () => {
  return (
    <Image
      src={LoaderSpinner}
      width={24}
      height={24}
      className="animate-spin"
      alt="The content is loading"
    />
  );
};
