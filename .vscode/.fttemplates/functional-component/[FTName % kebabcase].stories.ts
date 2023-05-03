import type { Meta, StoryObj } from '@storybook/react';
import { [FTName | pascalcase] } from './[FTName | kebabcase]';

const meta: Meta<typeof [FTName | pascalcase]> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Foo/[FTName | capitalcase]',
  component: [FTName | pascalcase],
};

export default meta;
type Story = StoryObj<typeof [FTName | pascalcase]>;

export const Default: Story = {
  args: {},
};
