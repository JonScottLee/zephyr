import type { Meta, StoryObj } from '@storybook/react';
import { Testimonial } from './testimonial';

const meta: Meta<typeof Testimonial> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Foo/Testimonial',
  component: Testimonial,
};

export default meta;

export const Overview = () => (
  <Testimonial
    attribution="Jon Lee"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in venenatis libero, in sollicitudin nunc. Suspendisse sed sem sit amet sapien malesuada auctor. Vestibulum eu fringilla risus."
  />
);
