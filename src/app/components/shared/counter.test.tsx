import { fireEvent, render, screen } from '@testing-library/react';
import { Counter } from './counter';

it('Counter element is successfully rendered', () => {
  const { getByText } = render(<Counter />);

  expect(getByText('You clicked 0 times')).toBeTruthy();
});

it('Counter increments when button is clicked', () => {
  const { getByText } = render(<Counter />);
  const button = screen.getByRole('button');

  fireEvent.click(button);

  expect(getByText('You clicked 1 times')).toBeTruthy();
});
