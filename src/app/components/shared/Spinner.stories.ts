import { Spinner } from './_Spinner';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Spinner> = {
  title: 'Example/Spinner',
  component: Spinner,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
