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

export const Overview = () => <TextField id="foo" label="Label" />;

export const States = () => (
  <ColWrapper style={{ gap: '2rem' }}>
    <TextField label="Disabled" disabled id="disabled" />

    <TextField
      label="With Helper Text"
      id="with-helper"
      helperText="Helper Text"
    />

    <TextField label="Invalid" invalid id="invalid" />
  </ColWrapper>
);
