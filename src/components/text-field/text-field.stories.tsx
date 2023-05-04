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
    <TextField id="small" size="sm" placeholder='Small' />
    <TextField id="medium" size="md" placeholder='Medium' />
    <TextField id="large" size="lg" placeholder='Large' />
  </ColWrapper>
);

export const States = () => (
  <ColWrapper>
    <TextField disabled id="small" placeholder='Disabled' />

    <TextField
      id="with-helper"
      placeholder='With Helper Text'
      helperText="Helper Text"
    />

    <TextField id="with-label" placeholder='With Label' label="Label Text" />

    <TextField focus id="focus" placeholder='Focused' />

    <TextField invalid id="invalid" placeholder='Invalid' />
  </ColWrapper>
);
