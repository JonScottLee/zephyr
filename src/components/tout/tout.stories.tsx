import type { Meta } from '@storybook/react';
import { Tout } from './tout';
import { H2 } from '../helpers/container/typography/typography';
import { FC } from 'react';
import { ColWrapper } from '../../../.storybook/storybook-components';

const meta: Meta<typeof Tout> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Layouts/Tout',
  component: Tout,
};

export default meta;

export const Overview: FC = () => (
  <Tout
    backgroundImage='/wind.jpg'
    content={
      <>
        <H2>Tout</H2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          accumsan mauris a interdum euismod. Sed auctor turpis lacinia purus
          vehicula lobortis.
        </p>
      </>
    }
  />
);

export const Positions: FC = () => (
  <ColWrapper>
    <Tout
      backgroundImage='/wind.jpg'
      content={
        <>
          <H2>Content On Left</H2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            accumsan mauris a interdum euismod. Sed auctor turpis lacinia purus
            vehicula lobortis.
          </p>
        </>
      }
    />

    <Tout
      backgroundImage='/wind.jpg'
      contentPos='right'
      content={
        <>
          <H2>Content On Right</H2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            accumsan mauris a interdum euismod. Sed auctor turpis lacinia purus
            vehicula lobortis.
          </p>
        </>
      }
    />
  </ColWrapper>
);
