import LoaderSpinner from './../images/spinner.png';
import Image from 'next/image';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Image
      src={LoaderSpinner}
      width={24}
      height={24}
      className="animate-spin"
      alt="The content is loading"
    />
  );
}
