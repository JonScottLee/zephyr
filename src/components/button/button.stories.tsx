import { Button } from './button';
import { FC } from 'react';
import type { Meta } from '@storybook/react';
import { RowWrapper } from '../../../.storybook/storybook-components';

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Input/Button',
  component: Button,
};

export default meta;

export const Kinds: FC = () => (
  <RowWrapper>
    <Button>Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="tertiary">Tertiary</Button>
  </RowWrapper>
);

export const Sizes: FC = () => (
  <RowWrapper>
    <Button size="large">Large</Button>
    <Button size="medium">Medium</Button>
    <Button size="small">Small</Button>
  </RowWrapper>
);

export const Disabled: FC = () => (
  <RowWrapper>
    <Button disabled>Primary</Button>
    <Button disabled variant="secondary">
      Secondary
    </Button>
    <Button disabled variant="tertiary">
      Tertiary
    </Button>
  </RowWrapper>
);

export const States: FC = () => (
  <RowWrapper>
    <Button>Regular</Button>
    <Button active>Active</Button>
  </RowWrapper>
);
