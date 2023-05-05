import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';

const meta: Meta<typeof Select> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Foo/Select',
  component: Select,
};

export default meta;

export const Overview = () => (
  <Select label="Pick a fruit" items={['Apple', 'Pear', 'Orange']} />
);
