import type { Meta } from '@storybook/react';
import { Tout } from './tout';
import { Button } from '../button/button';
import { H2, P } from '../helpers/typography';
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
    className="bg-[url('/wind.jpg')]"
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

export const Variants: FC = () => (
  <ColWrapper>
    <Tout
      className="bg-slate-500"
      textColor='light'
      content={
        <>
          <H2>Flat Tout</H2>
          <p>
            You can assign a flat color as the background as well as an image
          </p>
        </>
      }
    />

    <Tout
      className="bg-slate-500"
      contentPos='left'
      textColor='light'
      action={<Button variant='secondary-inverse'>Learn More</Button>}
      content={
        <>
          <H2>With Action Button</H2>
          <p>
            You can pass arbitrary content to the action prop and the tout will
            position it beneath the text content
          </p>
        </>
      }
    />
  </ColWrapper>
);

export const Positions: FC = () => (
  <ColWrapper>
    <Tout
      className="bg-[url('/wind.jpg')]"
      contentPos='left'
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
      className="bg-[url('/wind.jpg')]"
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

export const Clips: FC = () => (
  <ColWrapper>
    <Tout
      clip='bottom-right'
      className="bg-[url('/wind.jpg')]"
      contentPos='left'
      content={
        <>
          <H2>Clip Content</H2>
          <p>
            If you want more dynamic-looking touts, you can clip the BG image
          </p>
        </>
      }
    />

    <Tout
      className="bg-[#E6E6FA]"
      textColor='dark'
      clip='bottom-right'
      contentPos='left'
      content={
        <>
          <H2>Clip Content</H2>
          <p>
            If you want more dynamic-looking touts, you can clip the BG image
          </p>
        </>
      }
    />
  </ColWrapper>
);
