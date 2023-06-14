import { Counter } from './Counter';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Counter> = {
  title: 'Example/Counter',
  component: Counter,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Default: Story = {};
