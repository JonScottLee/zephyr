import type { Meta } from '@storybook/react';
import { TextField } from './text-field';
import { ColWrapper } from '../../../.storybook/storybook-components';

const meta: Meta<typeof TextField> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Foo/Text Field',
  component: TextField,
};

export default meta;

export const Overview = () => (
  <TextField id="foo" label="Label" placeholder="Enter label" />
);

export const Sizes = () => (
  <ColWrapper>
    <TextField id="small" size="small" placeholder='Small' />
    <TextField id="medium" size="medium" placeholder='Medium' />
    <TextField id="large" size="large" placeholder='Large' />
  </ColWrapper>
);
