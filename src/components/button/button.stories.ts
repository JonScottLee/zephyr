import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { ButtonVariants } from './button.constants';

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Input/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: ButtonVariants.SECONDARY,
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary Button',
    variant: ButtonVariants.TERTIARY,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: ButtonVariants.PRIMARY,
    disabled: true,
  },
};
