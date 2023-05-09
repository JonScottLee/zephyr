import type { Meta } from '@storybook/react';
import { Media } from './media';
import { H2, P } from '../helpers/typography';

const meta: Meta<typeof Media> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Layouts/Media',
  component: Media,
};

export default meta;

export const Overview = () => (
  <Media
    image="/wind.jpg"
    content={
      <>
        <H2>Media Pattern</H2>
        <p>Image goes on one side, content goes on the other</p>
      </>
    }
  />
);
