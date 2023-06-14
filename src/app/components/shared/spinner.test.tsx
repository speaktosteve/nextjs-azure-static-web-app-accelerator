import { render } from '@testing-library/react';
import { Spinner } from './Spinner';

it('Spinner element is successfully rendered', () => {
  const { getByAltText } = render(<Spinner />);

  expect(getByAltText('The content is loading')).toBeTruthy();
});
